import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, image }) {
  const [caption, setCaption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ image, caption });
    setCaption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={image} alt="Submit" style={{ maxWidth: '100%', height: 'auto' }} />
      <div>
        <label htmlFor="captionInput">Caption:</label>
        <input
          id="captionInput"
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter a caption"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Form;

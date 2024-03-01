import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form({ onSubmit, image, fetchNewImage }) {
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleSaveAndCreateNew = (event) => {
    event.preventDefault();
    onSubmit({ image, caption });
    setCaption('');
    fetchNewImage();
  };

  const handleSaveAndViewAll = (event) => {
    event.preventDefault();
    onSubmit({ image, caption });
    navigate('/saved-cards');
  };

  const handleViewSavedCardsOnly = () => {
    navigate('/saved-cards');
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <img src={image} alt="" className="form-image" />
      <div>
        <input
          id="captionInput"
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter a caption"
        />
      </div>
      <button onClick={handleSaveAndCreateNew}>Save and Create New</button>
      <button onClick={handleSaveAndViewAll}>Save and View All</button>
      <button type="button" onClick={handleViewSavedCardsOnly}>View Saved Cards</button> {/* New button for navigation */}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  fetchNewImage: PropTypes.func.isRequired,
};

export default Form;

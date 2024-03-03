import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './EditCaption.css';

function EditCaption({ onSave }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [caption, setCaption] = useState(location.state.caption);

  const handleSave = () => {
    onSave(location.state.image, caption);
    navigate('/saved-cards');
  };

  return (
    <div className="edit-caption-container">
      <img src={location.state.image} alt="Caption Edit" className="edit-caption-image" />
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter a caption"
        className="edit-caption-input"
      />
      <button onClick={handleSave} className="edit-caption-button">Save Caption</button>
    </div>
  );
}


EditCaption.propTypes = {
  onSave: PropTypes.func.isRequired,
};


export default EditCaption;

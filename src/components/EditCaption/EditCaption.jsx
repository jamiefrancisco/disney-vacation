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
    <div className="content-wrapper">
      <h1 className="form-title">
        <span className="first-word">Disney</span> 
        <span className="second-word">Vacation</span>
      </h1>
      <p className="form-instructions">
        This form allows you to edit your caption and re-save it.
      </p>
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
    </div>
  );
}

EditCaption.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default EditCaption;

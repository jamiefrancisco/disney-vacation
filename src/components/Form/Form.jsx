import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import getImage from '../../apiCalls';
import './Form.css';

function Form({ onSubmit, errorMessage }) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewImage();
  }, []);

  const fetchNewImage = () => {
    getImage().then(data => {
      setImage(data["1"]);
      setError('');
    }).catch(err => {
      const errorMsg = err.response && err.response.status === 404 ? 'Image not found. Please try again.' : 'Failed to fetch new image. Please try again.';
      setError(errorMsg);
    });
  };

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

  if (error) return <div>{error}</div>;
  if (!image) return <div>Loading...</div>;

  return (
<div className="content-wrapper">
  <h1 className="form-title"><span className="first-word">Disney</span><span className="second-word">Vacation</span></h1>
  <p className="form-instructions">
    This app allows you to generate random wikiHow illustrations and create your own funny captions. Perfect for creating content to be submitted to the subreddit /r/DisneyVacation. You can also view and edit your saved creations on another page.
  </p>

  <div className="form-container">
  <button className="form-button" type="button" onClick={handleViewSavedCardsOnly}>View Saved Captions</button>
    <form onSubmit={(event) => event.preventDefault()}>
      <img src={image} alt="" className="form-image" />
      <input
        id="captionInput"
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter a caption"
        className="form-input"
      />
      <div className="button-group">
        <button className="form-button" onClick={handleSaveAndCreateNew}>Save and Create New</button>
        <button className="form-button" onClick={handleSaveAndViewAll}>Save and View All</button>
    
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  </div>
</div>

  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default Form;

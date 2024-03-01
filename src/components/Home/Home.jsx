import { useState, useEffect } from 'react';
import getImage from '../../apiCalls';
import Form from "../Form/Form";
import PropTypes from 'prop-types';

function Home({ addCard, errorMessage }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNewImage();
  }, []);

  const fetchNewImage = () => {
    getImage().then(data => {
      setImage(data["1"]);
    }).catch(err => {
      if (err.response && err.response.status === 404) {
        setError('Image not found. Please try again.');
      } else {
        setError('Failed to fetch new image. Please try again.');
      }
    });
  };

  if (error) return <div>{error}</div>;
  if (!image) return <div>Loading...</div>;

  return (
    <div>
      <Form onSubmit={addCard} image={image} fetchNewImage={fetchNewImage} />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

Home.propTypes = {
  addCard: PropTypes.func.isRequired,
  errorMessage: PropTypes.string 
};

export default Home;

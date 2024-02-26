import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import getImage from '../../apiCalls';
import Form from "../Form/Form";
import PropTypes from 'prop-types';

function Home({ addCard }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getImage().then(data => {
      setImage(data["1"]);
    }).catch(err => {
      setError('Failed to fetch image');
      console.error(err);
    });
  }, []);

  const handleFormSubmit = (cardData) => {
    addCard(cardData);
    navigate('/saved-cards');
  };

  if (error) return <div>{error}</div>;
  if (!image) return <div>Loading...</div>;

  return (
    <div>
      <Form onSubmit={handleFormSubmit} image={image} />
    </div>
  );
}

Home.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default Home;


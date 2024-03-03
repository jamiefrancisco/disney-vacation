import PropTypes from 'prop-types';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ image, caption }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/edit-caption', { state: { image, caption } });
  };

  return (
    <div className="card" onClick={handleClick}> 
      <img src={image} alt="Card" />
      <p>{caption}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Card;

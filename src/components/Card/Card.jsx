import PropTypes from 'prop-types';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ image, caption, style }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/edit-caption', { state: { image, caption } });
  };

  return (
    <div className="card" style={style} onClick={handleClick}> 
      <img src={image} alt="Card" />
      <p className="caption">{caption}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Card;

import PropTypes from 'prop-types';
import './Card.css';

function Card({ image, caption }) {
  return (
    <div className="card">
      <img src={image} alt={caption} />
      <p>{caption}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Card;

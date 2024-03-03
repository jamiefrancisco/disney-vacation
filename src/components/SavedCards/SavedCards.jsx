import Card from '../Card/Card.jsx';
import './SavedCards.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SavedCards({ cards }) {
  const cardStyle = cards.length === 1 || cards.length === 2 ? { maxWidth: '380px', margin: '0 auto' } : {};

  return (
    <div className="saved-cards-page-wrapper">
      <h1 className="form-title">
        <span className="first-word">Disney</span> 
        <span className="second-word">Vacation</span>
      </h1>
      <p className="form-instructions">
        Manage your saved captions here. Click on an image to edit and re-save the caption.
      </p>
      <div className="saved-cards-page">
        <Link to="/" className="back-to-home-button">Back to Home</Link>
        {cards.length > 0 ? (
          <div className="saved-cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                caption={card.caption}
                style={cardStyle}
              />
            ))}
          </div>
        ) : (
          <div className="no-saved-cards-message">
            You have no saved captions.
          </div>
        )}
      </div>
    </div>
  );
}

SavedCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SavedCards;

import Card from '../Card/Card.jsx';
import './SavedCards.css';
import PropTypes from 'prop-types';

function SavedCards({ cards }) {
  return (
    <div className="saved-cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          caption={card.caption}
        />
      ))}
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

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../Form/Form';
import SavedCards from '../SavedCards/SavedCards.jsx';
import EditCaption from '../EditCaption/EditCaption.jsx';
import Error from '../Error404/Error404.jsx';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addCard = (newCard) => {
    const exists = cards.some(card => card.image === newCard.image);
    if (!exists) {
      setCards((prevCards) => [...prevCards, newCard]);
      setErrorMessage('');
    } else {
      setErrorMessage('Cannot add duplicate image.');
    }
  };

  const onSave = (imageSrc, newCaption) => {
    const updatedCards = cards.map(card => {
      if (card.image === imageSrc) {
        return { ...card, caption: newCaption };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Form onSubmit={addCard} errorMessage={errorMessage} />} />
        <Route path='/saved-cards' element={<SavedCards cards={cards} />} />
        <Route path="/edit-caption" element={<EditCaption onSave={onSave} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;

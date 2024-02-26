import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import SavedCards from '../SavedCards/SavedCards.jsx';
import Error from '../Error404/Error404.jsx';

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home addCard={addCard} />} />
        <Route path='/saved-cards' element={<SavedCards cards={cards} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;

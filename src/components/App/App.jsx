import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import getImage from '../../apiCalls';
import Home from '../Home/Home';
import Error from '../Error/Error';

function App() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Component mounted');
  
    getImage().then(data => {
      setImage(data["1"]);
    }).catch(err => {
      setError('Failed to fetch image');
      console.error(err);
    });
  
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  

  if (error) return <div>{error}</div>;
  if (!image) return <div>Loading...</div>;

  return (
    <main className='App'>
      <h1>Disney Vacation</h1>
      <Routes>
        <Route path='/' element={<Home image={image} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;

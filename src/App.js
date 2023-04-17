import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [img, setImg] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/2').then(res => setImg(res.data.image))
  }, []);
  
  return (
    <div className="App">
      App component
      
      {/* This is where the router will go */}
      <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About img={img} />} path='/about' />
          <Route element={<Contact img={img} />} path='/contact' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

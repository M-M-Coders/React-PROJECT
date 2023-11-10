// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Scholarship Program</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

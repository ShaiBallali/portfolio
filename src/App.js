import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

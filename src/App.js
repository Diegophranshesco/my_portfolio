import React from 'react';
// import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sales from './components/Sales';
import Contact from './components/Contacto';
import Footer from './components/Footer';
import './css/App.css'; 
 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Sales />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
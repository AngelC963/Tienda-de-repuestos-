import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sales from './components/Sales';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './hooks/useCart.jsx';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Sales />
        <Contacto />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
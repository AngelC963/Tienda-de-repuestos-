import React, { useState } from 'react';
import { useCart } from "../hooks/useCart"; 

const Header = () => {
  const [activeLink, setActiveLink] = useState('inicio');
  const { toggleCart, getCartItemsCount } = useCart();

  const handleNavClick = (section) => {
    setActiveLink(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1><i className="fas fa-car"></i> AutoRepuestos Castillo</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a 
                href="#inicio" 
                className={activeLink === 'inicio' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick('inicio')}
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#nosotros" 
                className={activeLink === 'nosotros' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick('nosotros')}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a 
                href="#ventas" 
                className={activeLink === 'ventas' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick('ventas')}
              >
                Ventas
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className={activeLink === 'contacto' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick('contacto')}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Botón del carrito */}
        <button onClick={toggleCart} className="cart-button">
          <i className="fas fa-shopping-cart"></i> Carrito ({getCartItemsCount()})
        </button>

        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
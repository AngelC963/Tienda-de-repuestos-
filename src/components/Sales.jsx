import React, { useState } from 'react';
import { useCart } from '../hooks/useCart'; // Importa el hook del carrito

const Sales = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const { addToCart } = useCart(); // Obtén la función addToCart

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // Datos de productos organizados
  const productsData = {
    filtros: [
      {
        id: 1,
        name: "Filtro de Aceite",
        price: 35.00,
        image: "/img/filtro.jpg",
        description: "Filtro de aceite de alta calidad"
      },
      {
        id: 2,
        name: "Aceites",
        price: 60.00,
        image: "/img/Aceite.jpg",
        description: "Aceite premium para motor"
      },
      {
        id: 6,
        name: "Kit de Cigüeñal Completo",
        price: 2500.00,
        image: "/img/Cigüenal.jpg",
        description: "Kit completo de cigüeñal de alta resistencia"
      },
      {
        id: 7,
        name: "Discos de Freno",
        price: 220.00,
        image: "/img/Discos.jpg",
        description: "Discos de freno de máxima calidad"
      }
    ],
    mangueras: [
      {
        id: 3,
        name: "Manguera hidráulicas",
        price: 75.00,
        image: "/img/mangeras.jpg",
        description: "Mangueras hidráulicas resistentes"
      }
    ],
    autopartes: [
      {
        id: 4,
        name: "Kit de Autopartes",
        price: 150.00,
        image: "img/Autopartes.jpg",
        description: "Contamos con diferentes Accesorios para su vehiculo"
      }
    ],
    taller: [
      {
        id: 5,
        name: "Servicio Mecánica",
        price: 280.00,
        image: "img/taller.jpg",
        description: "Contamos con profesionales expertos para el servicio mecánica en general"
      }
    ]
  };

  return (
    <section id="ventas" className="sales">
      <div className="container">
        <h2 className="section-title">Nuestros Productos</h2>
        
        {/* Filtros y Aceites */}
        <div className="category">
          <h3 
            className="category-title"
            onClick={() => toggleCategory('filtros')}
          >
            <i className="fas fa-filter"></i>
            Filtros, Aceites y Partes del Motor
            <span className="toggle-icon">
              {activeCategory === 'filtros' ? '▲' : '▼'}
            </span>
          </h3>
          {activeCategory === 'filtros' && (
            <div className="products">
              {productsData.filtros.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">S/ {product.price.toFixed(2)}</p>
                  <button 
                    className="btn-add"
                    onClick={() => addToCart(product)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mangueras */}
        <div className="category">
          <h3 
            className="category-title"
            onClick={() => toggleCategory('mangueras')}
          >
            <i className="fas fa-tint"></i>
            Mangueras
            <span className="toggle-icon">
              {activeCategory === 'mangueras' ? '▲' : '▼'}
            </span>
          </h3>
          {activeCategory === 'mangueras' && (
            <div className="products">
              {productsData.mangueras.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">S/ {product.price.toFixed(2)}</p>
                  <button 
                    className="btn-add"
                    onClick={() => addToCart(product)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Auto partes */}
        <div className="category">
          <h3 
            className="category-title"
            onClick={() => toggleCategory('autopartes')}
          >
            <i className="fas fa-cogs"></i>
            Auto partes
            <span className="toggle-icon">
              {activeCategory === 'autopartes' ? '▲' : '▼'}
            </span>
          </h3>
          {activeCategory === 'autopartes' && (
            <div className="products">
              {productsData.autopartes.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">S/ {product.price.toFixed(2)}</p>
                  <button 
                    className="btn-add"
                    onClick={() => addToCart(product)}
                  >
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Taller Mecánica */}
        <div className="category">
          <h3 
            className="category-title"
            onClick={() => toggleCategory('taller')}
          >
            <i className="fas fa-cog"></i>
            Taller Mecánica
            <span className="toggle-icon">
              {activeCategory === 'taller' ? '▲' : '▼'}
            </span>
          </h3>
          {activeCategory === 'taller' && (
            <div className="products">
              {productsData.taller.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">S/ {product.price.toFixed(2)}</p>
                  <button 
                    className="btn-add"
                    onClick={() => addToCart(product)}
                  >
                    Solicitar Servicio
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sales;
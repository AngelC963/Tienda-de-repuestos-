import React, { useState } from 'react';

const Sales = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section id="ventas" className="sales">
      <div className="container">
        <h2 className="section-title">Nuestros Repuestos</h2>
        
        {/* Filtros y Aceites */}
        <div className="category">
          <h3 
            className="category-title"
            onClick={() => toggleCategory('filtros')}
          >
            <i className="fas fa-filter"></i>
            Filtros y Aceites
            <span className="toggle-icon">
              {activeCategory === 'filtros' ? '▲' : '▼'}
            </span>
          </h3>
          {activeCategory === 'filtros' && (
            <div className="products">
              <div className="product-card">
                <img src="/img/filtro.jpg" alt="filtro" />
                <h4>Filtro de Aceite</h4>
                <p className="price">S/ 35.00</p>
                <button className="btn-add">Añadir al Carrito</button>
              </div>
              <div className="product-card">
                <img src="/img/Aceite.jpg" alt="Aceite" />
                <h4>Aceites</h4>
                <p className="price">S/ 60.00</p>
                <button className="btn-add">Añadir al Carrito</button>
              </div>
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
              <div className="product-card">
                <img src="/img/mangeras.jpg" alt="Mangueras" />
                <h4>Manguera hidráulicas</h4>
                <p className="price">S/ 75.00</p>
                <button className="btn-add">Añadir al Carrito</button>
              </div>
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
              <div className="product-card">
                <img src="img/Autopartes.jpg" alt="Autopartes" />
                <h4>Kit de Autopartes</h4>
                <p>Contamos con diferentes Accesorios para su vehiculo</p>
                <p className="price">S/ 150.00</p>
                <button className="btn-add">Añadir al Carrito</button>
              </div>
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
              <div className="product-card">
                <img src="img/taller.jpg" alt="Taller Mecánica" />
                <h4>Servicio Mecánica</h4>
                <p>Contamos con profesionales expertos para el servicio mecánica en general</p>
                <p className="price">S/ 280.00</p>
                <button className="btn-add">Solicitar Servicio</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sales;
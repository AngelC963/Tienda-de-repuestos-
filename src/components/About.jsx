import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Somos una empresa con más de 5 años de experiencia en el mercado de repuestos automotrices. Ofrecemos productos de la más alta calidad para todo tipo de vehículos.</p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <h3>Calidad Garantizada</h3>
              </div>
              <div className="feature">
                <i className="fas fa-truck"></i>
                <h3>Envíos Rápidos</h3>
              </div>
              <div className="feature">
                <i className="fas fa-headset"></i>
                <h3>Soporte 24/7</h3>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Taller mecánico"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
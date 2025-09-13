import React from 'react';

const Hero = () => {
  const scrollToSales = () => {
    document.getElementById('ventas').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Tienda de Repuesto de Autos: Castillo Nuñez</h2>
          <p>Los mejores repuestos para tu vehículo con garantía de calidad</p>
          <button className="btn" onClick={scrollToSales}>Ver Repuestos</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
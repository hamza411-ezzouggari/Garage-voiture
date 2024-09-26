import React from 'react';
import './AdvantagesPage.css'; // Add this file for CSS styling

const AdvantagesPage = () => {
  return (
    <div className="advantages-container">
      <h1 className="title">
        <span className="bold">OUR</span> ADVANTAGES
      </h1>
      <div className="advantages-grid">
        <div className="advantage-card">
          <div className="icon">&#128663;</div> {/* You can replace this with an actual image or icon */}
          <h3>ALL CAR MAKES</h3>
          <p>We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.</p>
        </div>

        <div className="advantage-card">
          <div className="icon">&#128295;</div>
          <h3>SERVICE VARIETY</h3>
          <p>The main principle of our work is to offer a wide range of quality car repair services and we’ve been doing it since our first day.</p>
        </div>

        <div className="advantage-card">
          <div className="icon">&#128736;</div>
          <h3>QUALITY SUPPORT</h3>
          <p>Car Repair offers quality support programs for any vehicles that allow them to always stay fully functional.</p>
        </div>

        <div className="advantage-card">
          <div className="icon">&#128268;</div>
          <h3>ACCESSORIES</h3>
          <p>At our car repair center, you can also buy any accessories you need for your vehicle, including car tires and filters.</p>
        </div>
      </div>
      <div className="read-more-container">
        <button className="read-more-btn-car">READ MORE</button>
      </div>
    </div>
  );
};

export default AdvantagesPage;

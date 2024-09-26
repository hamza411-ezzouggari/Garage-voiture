import React from "react";
import "./GuaranteeSection.css"; 
import steeringWheel from './3d.jpg'; // Remplacez par le chemin correct de votre image

const GuaranteeSection = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        <div className="guarantee-content">
          <h1>100% RESULT</h1>
          <h2>GUARANTEE</h2>
          <p>
            Car Repair stands for expertise, value, and professionalism - and has from the day the company began. 
            We were the first automotive aftermarket repair company to offer a lifetime guarantee on select services, 
            and today we guarantee that the results of our work will meet your expectations.
          </p>
          <button className="read-more-btn-car">Read More</button>
        </div>
        <div className="guarantee-image">
          <img src={steeringWheel} alt="Steering Wheel" />
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

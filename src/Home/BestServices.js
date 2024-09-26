import React from "react";
import "./BestServices.css"; 
import sportcar from './red.jpg'
const BestServices = () => {
  return (
    <section className="best-services">
      <div className="services-container">
        <div className="services-image">
          <img
            src={sportcar}
            alt="Engine"
          />
        </div>
        <div className="services-content">
          <h1>BEST</h1>
          <h2>SERVICES</h2>
          <p>
            Car Repair can solve almost any problem that occurs with your
            vehicle. From engine repairs and oil changes to regular maintenance
            and diagnostics, you will always get reliable services from our ASE
            certified technicians who use the latest in automotive equipment and
            diagnostic software.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default BestServices;

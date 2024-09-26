import React from 'react';
import fri from './frin.jpg';
import Eng from './Eng.jpg';
import oil from './oil.jpg';
import wheel from './wheel.jpg';
import depa from './depa.png';
import './ServicesPage.css'; 

const ServicesPage = () => {
  return (
    <div className="services-container-33">
      <h1 className="title">
        <span className="bold">OUR</span> SERVICES
      </h1>
      <div className="services-grid">
        <div className="service-card-33">
          <img src={fri} alt="Brake Repair" className="service-image" />
          <div className="service-text">
            <h3>BRAKE REPAIR</h3>
            <p>From the brake pedal to hydraulic brake fluid, our technicians can perform brake repair on any make and model.</p>
          </div>
        </div>

        <div className="service-card-33">
          <img src={Eng} alt="Engine Repair" className="service-image" />
          <div className="service-text">
            <h3>ENGINE REPAIR</h3>
            <p>We take the welfare of your engine seriously and offer services to prevent the need for future engine replacement.</p>
          </div>
        </div>

        <div className="service-card-33">
          <img src={oil} alt="Oil Change" className="service-image" />
          <div className="service-text">
            <h3>OIL CHANGE</h3>
            <p>One of the most effective and inexpensive ways to help protect your car is to change the oil and oil filter regularly.</p>
          </div>
        </div>

        <div className="service-card-33">
          <img src={wheel} alt="Wheel Change" className="service-image" />
          <div className="service-text">
            <h3>WHEEL CHANGE</h3>
            <p>We provide extensive wheel change services that include emergency tire replacement when you are on the road.</p>
          </div>
        </div>

        <div className="service-card-33">
          <img src={depa} alt="Oil Change" className="service-image" />
          <div className="service-text">
            <h3>ROADSIDE ASSISTANCE</h3>
            <p>Our fast roadside assistance services are available 24/7 to help you in case of a breakdown on the road. 
            Whether you need towing, tire replacement, or a battery jumpstart, we're ready to assist.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;

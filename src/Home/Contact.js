import React, { useState } from 'react';
import './Contact.css';
import Sped from './sped.jpg';
import GoogleMapReact from 'google-map-react';
import emailjs from 'emailjs-com';

function CONTACT() {
  return (
    <div className="contact-container-test">
      <div className='image-spped'>
        <img src={Sped} alt="speed"/>
      </div>
      <div className="map-section">
        <GoogleMap />
        <ContactInfo />
      </div>
      <div className="form-section">
        <ContactForm />
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      to_name: 'slm Auto',               // Nom du destinataire
      name: formData.name,     // Nom de l'utilisateur
      phone: formData.phone,              // Téléphone de l'utilisateur
      email: formData.email,              // E-mail de l'utilisateur
      message: formData.message           // Message de l'utilisateur
    };
  
    emailjs.send('service_op29j04', 'template_8mgcazv', templateParams, '9hwUDFXJOYmmgc4jf')
      .then((result) => {
        console.log(result.text);
        alert("Message envoyé avec succès !");
      }, (error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi du message.");
      });
  };

  return (
    <div className="contact-form">
      <div className='title-contact'>
        <h2>CONTACT</h2>
        <h1>FORM</h1>
      </div>
      <form onSubmit={sendEmail}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Phone" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="E-mail" 
          required 
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Message" 
          required 
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

function GoogleMap() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 49.1806192,
      lng: -0.3326201
    },
    zoom: 11
  };
  return (
    <div className='Map'>
      <div className='title-contact'>
        <h2>CONTACT</h2>
        <h1>info</h1>
      </div>
      <div className="google-map" style={{ height: '32vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={49.1806192}
            lng={-0.3326201}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="icon22">&#128205;<p>127 cours Caffarelli, 14120 Mondeville, Caen, France</p></div>
      <div className="icon22">&#128222;<p>Freephone: +33 7 81 91 64 83</p></div>
      <div className="icon222">&#9742;<p>Freephone: +33 2 31 99 51 79</p></div>
      <div className="icon22">&#128231;<p>E-mail: autoslm610@gmail.com</p></div>
    </div>
  );
}

export default CONTACT;

import React from 'react';
import Clinicicon from '../assets/Featuresimages/Clinical.png'
import Vegitarianicon from '../assets/Featuresimages/Vegitarian.png'
import Productioncountryicon from '../assets/Featuresimages/Madeinindia.png'
import Shoppingicon from '../assets/Featuresimages/Shopping.png'
import safeicon from '../assets/Featuresimages/Rcycle.png'
import Ecoicon from '../assets/Featuresimages/Eco.png'
import './css/Features.css'
       

const Features = () => {
  const features = [
    {
      title: "Clinically Studied",
      description: "All products that we offer have undergone lab and safety tests.",
      icon: Clinicicon, 
    },
    {
      title: "Vegetarian Friendly",
      description: "We have a wide selection of vegetarian products to meet your needs.",
      icon: Vegitarianicon,  
    },
    {
      title: "Made In India",
      description: "Shop local and explore health products made right here in India.",
      icon: Productioncountryicon, 
    },
    {
      title: "Free Shipping",
      description: "We deliver to your door with no shipping costs on your orders.",
      icon: Shoppingicon, 
    },
    {
      title: "No Risk",
      description: "We ensure that all products are safe and within their use-by date.",
      icon: safeicon, 
    },
    {
      title: "GMO Free",
      description: "Natural, no modified products and derivatives for those who need it.",
      icon: Ecoicon, 
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;


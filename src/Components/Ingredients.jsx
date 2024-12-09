import React from 'react';
import Vitamincicon from '../assets/Ingredients/Vitaminc.png';
import VitaminB3icon from '../assets/Ingredients/VitaminB3.png';
import Lactoicon from '../assets/Ingredients/Lactobacillus.png';
import Hyaluronicicon from '../assets/Ingredients/Hyaluronicacid.png';
import Magnesiumicon from '../assets/Ingredients/Magnesium.png';
import BannerIcon from '../assets/Ingredients/Banner.png';
import './css/Ingredients.css';

const Ingredients = () => {
  return (
    <div className="container">
    <section className="ingredients-section">
      {/* First Row */}
      <div className="row first-row">
        <div className="ingredient-card large">
          <div className="ingredients-header">
            <h3>INGREDIENTS</h3>
            <h5>Better Ingredients</h5>
            <p>
              Only the best when you choose products offered on our platform - high-quality
              ingredients for high-quality products!
            </p>
          </div>
        </div>
        <div className="ingredient-card">
          <div className="image-container">
            <img src={Vitamincicon} alt="Vitamin C" />
            <div className="ingre-body">
              <h3>Vitamin C</h3>
              <p>Vitamin C as ascorbic acid</p>
            </div>
          </div>
          <a href="#see-more">SEE MORE</a>
        </div>
        <div className="ingredient-card">
          <div className="image-container">
            <img src={VitaminB3icon} alt="Vitamin B3" />
            <div className="ingre-body">
              <h3>Vitamin B3</h3>
              <p>Niacin for healthy gut and skin</p>
            </div>
          </div>
          <a href="#see-more">SEE MORE</a>
        </div>
      </div>
  
      {/* Second Row */}
      <div className="row second-row">
        <div className="ingredient-card wide">
          <div className="image-container">
            <img src={Magnesiumicon} alt="Magnesium" />
            <div className="ingre-body">
              <h3>Magnesium</h3>
              <p>Boost energy and support muscle function</p>
            </div>
          </div>
          <a href="#see-more">SEE MORE</a>
        </div>

        <div className="ingredient-card wide">
          <div className="image-container">
            <img src={Hyaluronicicon} alt="Hyaluronic Acid" />
            <div className="ingre-body">
              <h3>Hyaluronic Acid</h3>
              <p>For smooth, supple, and soft skin</p>
            </div>
          </div>
          <a href="#see-more">SEE MORE</a>
        </div>
        <div className="ingredient-card">
          <div className="image-container">
            <img src={Lactoicon} alt="Lactobacillus" />
            <div className="ingre-body">
              <h3>Lactobacillus</h3>
              <p>Invigorate your gut microbiome</p>
            </div>
          </div>
          <a href="#see-more">SEE MORE</a>
        </div>
        <div className="ingredient-card">
          <div className="image-container">
            <img src={BannerIcon} alt="Other Ingredient"  className='banner'/>
            
          </div>
          
        </div>
      </div>
    </section>
  </div>
  

  );
};

export default Ingredients;

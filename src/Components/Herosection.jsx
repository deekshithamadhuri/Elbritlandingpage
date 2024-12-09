import React from 'react';
import ProductimgIcon from '../assets/Productimg.png';
import vitaminsIcon from '../assets/vitamins.svg';
import weightlossIcon from '../assets/weightloss.png';
import functionalFoodsIcon from '../assets/functionalfood.png';
import Rectangleicon from '../assets/Rectangle.png';
import './css/Herosection.css';

const Herosection = () => {
 

  return (
    <>
      <div className="mainsection" >
      <h1 >Essential Vitamins</h1>

      <div className='hero-content'>
        {/* Left Section */}
        <div className="left-section">
          <p className='divp'>Online Medical Supplies</p>
          <h4 >Get your Vitamins & Minerals</h4>
          <button >Explore</button>
        </div>

        {/* Middle Section */}
        <div className="middle-section" >
          <img src={ProductimgIcon} alt="backgroundimage"  />
          <img  src={Rectangleicon} alt="Productimage"  />
        </div>

        {/* Right Section */}
        <section className="right-section" >
          <div >
            <img src={vitaminsIcon} alt="vitaminsicon"  />
            <p>
              <span >VITAMINS</span>
              <br />
              Increase vitamins and minerals in your diet
            </p>
          </div>

          <div >
            <img src={weightlossIcon} alt="Weight loss icon"  />
            <p >
              <span >WEIGHT LOSS</span>
              <br />
              Find scientifically proven solutions
            </p>
          </div>

          <div >
            <img src={functionalFoodsIcon} alt="Functional Foods icon"  />
            <p >
              <span >FUNCTIONAL FOODS</span>
              <br />
              From protein powders to baby formula
            </p>
          </div>

        </section>
      </div>
      <div className='dotted'>

      <div className='slider'></div>
      <div className='slider'></div>
      </div>
      </div>
    </>
  );
};

export default Herosection;

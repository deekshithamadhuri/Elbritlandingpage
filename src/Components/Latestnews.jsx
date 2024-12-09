import React from 'react'
import C19fullicon from '../assets/Latestnewsimages/c19Fulli.png'
import c19halficon from "../assets/Latestnewsimages/c19half.png"
import Groupiicon from '../assets/Latestnewsimages/Group 4.png'
import Tableticon from '../assets/Latestnewsimages/Tablets.png'
import Date from '../assets/Latestnewsimages/date.png'
import './css/Latestnews.css';

const Latestnews = () => {
  return (
    <>
    <div  className='main-container'>
        <div className='Heading'>
        <h4>OUR BLOG</h4>
        <h2>LATEST NEWS</h2>
        </div>
            
        <div className='grid-container'>
            <div className='image1'>
                <img src={C19fullicon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image2'>
                <img src={c19halficon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image3'>
                <img src={C19fullicon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
                
            </div>
            <div className='image4'>
                <img src={c19halficon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image5'>
                <img src={Tableticon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image6'>
                <img src={Groupiicon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image7'>
                <img src={Tableticon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
            <div className='image8'>
                <img src={Groupiicon} alt='Jelly Bee' />
                {/* <img src={Data} alt='date' /> */}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Latestnews
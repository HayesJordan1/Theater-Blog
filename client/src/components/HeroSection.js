import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import video from'./Videos/testvideo.mp4';

console.log(video);
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={video} autoPlay loop muted />
        <h1>COOKING BLOG</h1>
        <p>Cooking brings people together</p>
        <div className="hero-btns">
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >GET STARTED</Button>
        <Button className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >PLACE HOLDER <i className='far fa-play-circle' /></Button>
        </div>
    </div>
  )
}

export default HeroSection
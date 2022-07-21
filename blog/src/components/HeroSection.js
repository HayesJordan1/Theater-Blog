import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/Videos/testvideo.mp4" autoPlay loop muted />
        <h1>PLACE HOLDER</h1>
        <p>This is a sample text</p>
        <div className="hero-btns"></div>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>PLACE HOLDER</Button>
    </div>
  )
}

export default HeroSection
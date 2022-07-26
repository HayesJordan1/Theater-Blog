import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
     <section 
     className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the Newsletter to see all the new recipes!
        </p>
        <p className="footer-subscription-text">
            You can leave at any time!
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" className="footer-input" placeholder='Your Email'>
                </input>
                <Button buttonStyle='btn-outline'>Join</Button>
            </form>

        </div>
     </section>
     <div className='footer-links'>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link to="/">How it Works</Link>
                <Link to="/">Testimonials</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Investors</Link>
            </div>
            <div className="footer-link-items">
                <h2>Find us</h2>
                <Link to="/">Newark, DE</Link>
                <Link to="/">Wilmington, DE</Link>
                <Link to="/">MiddleTown, DE</Link>
                <Link to="/">Washington D.C</Link>
                <Link to="/">Townsend, DE</Link>
            </div>
            <div className="footer-link-items">
                <h2>Contact us</h2>
                <Link to="/">(123)-456-78910</Link>
                <Link to="/">Cookngblg@cookngblg.com</Link>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Linkedin</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Youtube</Link>
            </div>
        </div>
     </div>
     <section className='social-media'>
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/'className="social-logo">
                    COOKNG  <i className='fa-solid fa-user-chef'></i>
                </Link>
            </div>
            <small className='website-rights'>COOKNG © 2022</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label='Facebook'
                >
                 <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label='Instagram'
                >
                 <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label='Youtube'
                >
                 <i className="fab fa-youtube"></i>
                </Link>
                <Link className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label='Twitter'
                >
                 <i className="fab fa-twitter"></i>
                </Link>
                <Link className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label='Linkedin'
                >
                 <i className="fab fa-linkedin"></i>
                </Link>
            </div>
    
        </div>
     </section>
    </div>
  )
}

export default Footer
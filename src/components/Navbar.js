import React from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav className='main-nav'>
      <div className='container flex'>
        <img className='logo' src={logo} alt='logo' />
        <div className='social'>
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </div>
      </div>
    </nav>
  );
}

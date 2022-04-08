import { React, useState } from 'react';
import './nav.css';
import Logo from '../../assets/javascript-svgrepo-com.svg';

function MyNavbar() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <header>
      <a
        rel='noreferrer'
        href='#about'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <img src={Logo} alt='Apollo' />
      </a>
      <nav>
        <ul class='nav__items'>
          <li>
            <a
              rel='noreferrer'
              href='#about'
              onClick={() => setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='#features'
              onClick={() => setActiveNav('#features')}
              className={activeNav === '#features' ? 'active' : ''}
            >
              Features
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='#cta'
              onClick={() => setActiveNav('#cta')}
              className={activeNav === '#cta' ? 'active' : ''}
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='#contact'
              onClick={() => setActiveNav('#contact')}
              className={activeNav === '#contact' ? 'active' : ''}
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className='nav__burger'>
          <div className='bar'></div>
        </div>
      </nav>
    </header>
  );
}

export default MyNavbar;

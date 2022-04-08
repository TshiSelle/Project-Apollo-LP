import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Your Favorite Place for Free Bootstrap Themes</h1>
        <hr className='breakLine' />
      </div>
      <div className='header__definition'>
        <p>
          Start Bootstrap can help you build better websites using the Bootstrap
          framework! Just download a theme and start customizing, no strings
          attached!
        </p>
        <a href='#about'>Find Out More</a>
      </div>
    </div>
  );
};

export default Header;

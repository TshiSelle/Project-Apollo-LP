import React from 'react';
import './header.css';
import HeaderImg from '../../assets/headerimg.jpg';

const MyHeader = () => {
  return (
    <section id='header'>
      <div className='container__header'>
        <div className='title'>
          <h1>Welcome to Project Apollo</h1>
          <hr className='breakLine' />
        </div>
        <div className='header__background'></div>
        <div className='header__definition'>
          <p>
            Start Bootstrap can help you build better websites using the
            Bootstrap framework! Just download a theme and start customizing, no
            strings attached!
          </p>
          <a href='#about'>Find Out More</a>
        </div>
      </div>
    </section>
  );
};

export default MyHeader;

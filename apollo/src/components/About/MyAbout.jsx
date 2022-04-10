import React from 'react';
import './about.css';

const MyAbout = () => {
  return (
    <section
      id='about'
      className='d-flex justify-content-center align-items-center'
    >
      <div className='container text-center w-50  my__about'>
        <div className='row w-100 '>
          <div className='col-lg-12'>
            <h2>Welcome to Project Apollo</h2>
            <hr className='w-75 ms-auto me-auto' />
          </div>

          <div className='col-lg-12 '>
            <p>
              The House of JavaScript, where the developer community help each
              other learn and hone their skills
            </p>
          </div>
          <div className='col-lg-12'>
            <button className='button-17' href='#about'>
              Get Started!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAbout;

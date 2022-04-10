import React from 'react';
import './about.css';
import AstroLabs from '../../assets/astrolabsHorz.png';

const MyAbout = () => {
  return (
    <section
      id='about'
      className='d-flex justify-content-center align-items-center'
    >
      <div className='container text-center w-50  my__about pt-5 pb-5'>
        <div className='row w-100 '>
          <div className='col-lg-12 astro'>
            <h1>About Us</h1>
            <img src={AstroLabs} alt='astrolabs' />
            <hr className='w-75 ms-auto me-auto' />
          </div>

          <div className='col-lg-12 par'>
            <p>
              We're a developers community determined to support each other in
              any way possible. Co-working with the AstroLabs community, Project
              Apollo was born, purposed on storing as much infmoration as
              developers can collect in one place.
            </p>
          </div>
          <div className='col-lg-12'>
            <a href='#signup'>
              <button className='button-17' href='#about'>
                Get Started!
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAbout;

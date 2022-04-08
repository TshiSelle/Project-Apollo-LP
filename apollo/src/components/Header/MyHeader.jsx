import React from 'react';
import './header.css';

const MyHeader = () => {
  return (
    <section id='header'>
      <div className='container-fluid w-50 d-flex justify-content-center align-items-center test2'>
        <div className='row  '>
          <div className='col-lg-12 test'>Welcome to Project Apollo</div>
          <div className='col-lg-12 test'>
            <hr />
          </div>
          <div className='col-lg-12 test'>
            <p>
              The House of JavaScript, where the developer community help each
              other learn and hone their skills
            </p>
          </div>
          <div className='col-lg-12 test'>
            <button className='button-17'> Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyHeader;

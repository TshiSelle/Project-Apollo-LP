import { React, useState } from 'react';
import './header.css';

const MyHeader = () => {
  const [myNav, setMyNav] = useState('#');
  return (
    <section id='header'>
      <div className='container-fluid w-50 d-flex justify-content-center align-items-center test2'>
        <div className='row '>
          <div className='col-lg-12 test'>
            <h2>Welcome to Project Apollo</h2>
          </div>
          <div className='col-lg-12 test'>
            <hr className='w-75 ms-auto me-auto' />
          </div>
          <div className='col-lg-12 test'>
            <p>
              Our very first open-database project made for the community of
              developers. Providing documentation, tips, and helpful technical
              questions using JavaScript.
            </p>
          </div>
          <div className='col-lg-12 test'>
            <a href='#about' className='btn_href'>
              <button className='button-17'>Find Out More!</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyHeader;

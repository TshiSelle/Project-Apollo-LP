import React from 'react';
import './features.css';
import Learning from '../../assets/learning.svg';
import Coding from '../../assets/coding.svg';
import Interview from '../../assets/interview.svg';
import ScriptTip from '../../assets/scripttip.svg';

const MyFeatures = () => {
  return (
    <section id='features'>
      <div className='container d-flex justify-content-center align-items-center  text-center feature_container pb-5'>
        <div className='row features_row w-100'>
          <div className='col-12 mb-5 mt-5'>
            <h2>What We Provide</h2>
            <hr className='w-25 ms-auto me-auto' />
          </div>

          <div className='col-lg-3 col-md-6 col-sm-12 features_col'>
            {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className='features_img ms-auto me-auto mb-2'
              src={Learning}
              alt='image'
            ></img>
            <h4>JS ES6 E-Learning</h4>
            <p>From Fundamentals to Advanced</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 features_col'>
            {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className='features_img ms-auto me-auto mb-2'
              src={Coding}
              alt='image'
            ></img>
            <h4>Interactive Documentation</h4>
            <p>Documentation examples where the user test their code</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 features_col'>
            {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className='features_img ms-auto me-auto mb-2'
              src={ScriptTip}
              alt='image'
            ></img>
            <h4>The ScriptTip Room</h4>
            <p>Common Development problems with their solution</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 features_col'>
            {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className='features_img ms-auto me-auto mb-2'
              src={Interview}
              alt='image'
            ></img>
            <h4>Technical Interview Practice</h4>
            <p>Technical Interview questions for everyone to practice on</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFeatures;

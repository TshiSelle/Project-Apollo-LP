import React from "react";
import "./features.css";
import logo from "../../assets/logo.png";

const MyFeatures = () => {
  return (
    <section id="features">
      <div className="container d-flex justify-content-center align-items-center  text-center feature_container pb-5">
        <div className="row features_row w-100">
          <div className="col-12 mb-5 mt-5">
            <h2>At your service</h2>
            <hr className="w-25 ms-auto me-auto" />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 features_col">

    {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className="features_img ms-auto me-auto mb-2"
              src={logo}
              alt="image"
            ></img>
            <h4>Sturdy themes</h4>
            <p>Our themes are updated</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 features_col">

    {/* Change the img src logo to whatever you want and change h4 and p */}
            
            <img
              className="features_img ms-auto me-auto mb-2"
              src={logo}
              alt="image"
            ></img>
            <h4>Sturdy themes</h4>
            <p>Our themes are updated</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 features_col">

    {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className="features_img ms-auto me-auto mb-2"
              src={logo}
              alt="image"
            ></img>
            <h4>Sturdy themes</h4>
            <p>Our themes are updated</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 features_col">

    {/* Change the img src logo to whatever you want and change h4 and p */}

            <img
              className="features_img ms-auto me-auto mb-2"
              src={logo}
              alt="image"
            ></img>
            <h4>Sturdy themes</h4>
            <p>Our themes are updated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFeatures;

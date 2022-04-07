import React from 'react';
import './features.css';

const Features = () => {
  return (
    <section id='services'>
      <div>
        <h2>At Your Service</h2>
        <hr />
        <div>
          <div>
            <div>
              <div>
                <i></i>
              </div>
              <h3>Sturdy Themes</h3>
              <p>Our themes are updated regularly to keep them bug free!</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <i class='bi-laptop fs-1 text-primary'></i>
              </div>
              <h3 class='h4 mb-2'>Up to Date</h3>
              <p class='text-muted mb-0'>
                All dependencies are kept current to keep things fresh.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <i></i>
              </div>
              <h3>Ready to Publish</h3>
              <p>You can use this design as is, or you can make changes!</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <i></i>
              </div>
              <h3>Made with Love</h3>
              <p>Is it really open source if it's not made with love?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

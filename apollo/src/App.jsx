import React from 'react';
import MyNavbar from './components/Nav/mynavbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Contact from './components/ContactUs/Contact';
import CTA from './components/CTA/CTA';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <MyNavbar />;
      <Header />;
      <About />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

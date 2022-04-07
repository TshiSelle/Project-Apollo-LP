import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import ContactUs from './components/ContactUs/Contact';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Features />
      <CTA />
      <ContactUs />
    </>
  );
};

export default App;

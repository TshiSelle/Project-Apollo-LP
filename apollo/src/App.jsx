import React from 'react';
import MyNavbar from './components/nav/Nav';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import CTA from './components/cta/CTA';
import About from './components/about/About';

const App = () => {
  return (
    <>
      <MyNavbar />
      <Header />
      <About />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

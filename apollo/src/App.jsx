import React from 'react';
import MyNavbar from './components/nav/MyNavBar';
import Header from './components/header/MyHeader';
import Features from './components/features/MyFeatures';
import Footer from './components/footer/MyFooter';
import Contact from './components/contact/MyContact';
import CTA from './components/cta/CTA';
import About from './components/about/MyAbout';
import '../node_modules/bootstrap/scss/bootstrap';

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

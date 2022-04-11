import React from 'react';
import MyNavbar from './components/nav/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './components/Header/MyHeader';
import MyFeatures from './components/Features/MyFeatures';
import MyAbout from './components/About/MyAbout';
import MyContact from './components/contact/MyContact';

const App = () => {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <MyAbout />
      <MyFeatures />
      <MyContact />
    </>
  );
};

export default App;

import React from 'react';
import MyNavbar from './components/Nav/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './components/Header/MyHeader';
import MyFeatures from './components/Features/MyFeatures';
import MyAbout from './components/About/MyAbout';

const App = () => {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <MyAbout />
      <MyFeatures />
    </>
  );
};

export default App;

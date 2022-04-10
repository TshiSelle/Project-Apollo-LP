import React from 'react';
import MyNavbar from './components/nav/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './components/header/MyHeader';
import MyFeatures from './components/features/MyFeatures';
import MyAbout from './components/about/MyAbout';

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

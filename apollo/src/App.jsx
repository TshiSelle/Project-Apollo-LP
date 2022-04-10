import React from 'react';
import MyNavbar from './components/Nav/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './components/Header/MyHeader';
import MyFeatures from './components/Features/MyFeatures';
import MyAbout from './components/About/MyAbout';
import SignUp from './components/Contact/MyContact';
import MyContact from './components/Contact/MyContact';

const App = () => {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <MyAbout />
      <MyFeatures />
      <SignUp />
      <MyContact/>
    </>
  );
};

export default App;

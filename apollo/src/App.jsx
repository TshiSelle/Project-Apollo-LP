import React from "react";
import MyNavbar from "./components/nav/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from './components/Header/MyHeader';
import MyFeatures from './components/Features/MyFeatures';

const App = () => {
  return (
    <>
      <MyNavbar />
      <MyHeader />
      <MyFeatures />
    </>
  );
};

export default App;

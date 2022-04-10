import React, { Component, useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import jslogo from '../../assets/javascript-svgrepo-com.svg';

function MyNavbar() {
  const [navcolor, setNavcolor] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavcolor(true)
    } else {
      setNavcolor(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  
  return (
    <div>
      <Navbar  className={navcolor ? "nav" : "nav2"}  fixed='top' expand='lg'>
        <Container>
          <Navbar.Brand className='navlink'>
            <a href='#header'>
              <img src={jslogo} alt='image' className='navimage' />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='navcollapse'
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='navlink' href='#header'>
                Home
              </Nav.Link>
              <Nav.Link className='navlink' href='#about'>
                About us
              </Nav.Link>
              <Nav.Link className='navlink' href='#features'>
                Features
              </Nav.Link>
              <Nav.Link className='navlink' href='#signup'>
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

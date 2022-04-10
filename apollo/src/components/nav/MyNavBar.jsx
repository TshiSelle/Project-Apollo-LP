import { React, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import jslogo from '../../assets/javascript-svgrepo-com.svg';

function MyNavbar() {
  const [myNav, setMyNav] = useState('#');
  return (
    <div>
      <Navbar className={navcolor ? 'nav' : 'nav2'} fixed='top' expand='lg'>
        <Container>
          <Navbar.Brand className='navlink'>
            <a
              href='#header'
              onClick={() => setMyNav('#header')}
              className={myNav === '#header' ? 'active navlink' : 'navlink'}
            >
              <img src={jslogo} alt='image' className='navimage' />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='navcollapse'
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#header'
                onClick={() => setMyNav('#header')}
                className={myNav === '#header ' ? 'active navlink' : 'navlink'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#about'
                onClick={() => setMyNav('#about')}
                className={myNav === '#about ' ? 'active navlink' : 'navlink'}
              >
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

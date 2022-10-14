import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Container  >
      <Navbar bg="primary" variant="dark" className='navbar'>
        <Container>
          <div className='nav2'>
        <LinkContainer to="/">
              <Nav.Link>Back</Nav.Link>
            </LinkContainer>
          <Nav className="me-auto">
             
            <LinkContainer to="/Pngtojpg">
              <Nav.Link>PNG to JPG</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Jpgtopng">
              <Nav.Link>JPG to PNG</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Heictojpg">
              <Nav.Link>HEIC to JPG</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Webptojpeg">
              <Nav.Link>WebP to JPEG</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/JpegtoWord">
              <Nav.Link>JPEG to Word</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Imagetotext">
              <Nav.Link>Image to Text</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Texttoimage">
              <Nav.Link>Text to Image</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Facicon">
              <Nav.Link>Fav Icon Generator</Nav.Link>
            </LinkContainer>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar
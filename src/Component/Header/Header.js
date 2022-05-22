import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <Container>
  <Navbar.Brand href="/">
  <img
        src={logo}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#tools">paintTools</Nav.Link>
      <Nav.Link href="#gallary">Gallary</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/service" href="#service">Service</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/achievement" href="#achievement">Achievement</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/review" href="#review">Review</NavDropdown.Item>
        <NavDropdown.Item as={Link}to="/team" href="#team">Team</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Header;
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
<Container>
  <Navbar.Brand href="#home">The Recipe Treasury</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse className="justify-content-end">
  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/recipes">Recipes</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}

export default NavBar;



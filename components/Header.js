import Link from "next/link";
//import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (

    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src="/logoooo.png"
              width="150"
              height="75"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Kontakt</Nav.Link>
            <NavDropdown title="Mehr" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Youtube
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Über Capstone</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/imprint">
                Unsere Mission
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

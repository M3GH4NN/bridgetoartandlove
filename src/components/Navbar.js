import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar
      style={{ backgroundColor: "#212529" }}
      variant="dark"
      expand="lg"
      className="mb-4"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo1.webp"
            alt="A Bridge to Art & Love Logo"
            className="me-2"
            style={{ height: "60px", width: "60px", objectFit: "cover" }}
          />
          A Bridge to Art & Love
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

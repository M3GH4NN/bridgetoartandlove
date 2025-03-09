import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Mail, Instagram } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

import "bootstrap/dist/css/bootstrap.min.css";

const artworks = [
  { title: "Artwork 1", img: "https://via.placeholder.com/300", link: "#" },
  { title: "Artwork 2", img: "https://via.placeholder.com/300", link: "#" },
  { title: "Artwork 3", img: "https://via.placeholder.com/300", link: "#" },
];

export default function Gallery() {
  return (
    <Container
      fluid
      className="bg-dark text-white min-vh-100 py-4"
      style={{ fontFamily: "Tahoma, sans-serif" }}
    >
      {/* Navigation Bar */}
      <Navbar bg="secondary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/images/logo1.webp"
              alt="Bridge to Art and Love Logo"
              className="me-2"
              style={{ height: "60px", width: "60px", objectFit: "cover" }}
            />
            A Bridge to Art and Love
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/#/">Home</Nav.Link>
<Nav.Link as={Link} to="/#/gallery">Gallery</Nav.Link>
<Nav.Link as={Link} to="/#/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="text-center mb-4">Gallery</h1>
        <Row className="g-4">
          {artworks.map((art, index) => (
            <Col md={4} key={index}>
              <Card className="bg-secondary text-white">
                <Card.Img variant="top" src={art.img} alt={art.title} />
                <Card.Body>
                  <Card.Title>{art.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="h2 fw-bold">Contact Me</h2>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="outline-light"
              href="mailto:contact@bridgetoartandlove.com"
            >
              <Mail className="me-2" /> Email
            </Button>
            <Button
              variant="outline-light"
              href="your-instagram-link"
              target="_blank"
            >
              <Instagram className="me-2" /> Instagram
            </Button>
          </div>
        </section>
      </Container>
    </Container>
  );
}

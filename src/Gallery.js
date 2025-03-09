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
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
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
      <Navbar
        style={{ backgroundColor: "#212529" }}
        variant="dark"
        expand="lg"
        className="mb-4"
      >
        <Container>
          <Navbar.Brand href="#">
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
        <Footer />
      </Container>
    </Container>
  );
}

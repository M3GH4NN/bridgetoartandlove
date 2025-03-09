import React from "react";
import { Container, Card, Button, Nav, Navbar } from "react-bootstrap";
import { Mail, Instagram, ShoppingBag, Calendar } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function BridgeToArtAndLove() {
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
        {/* Header Section - Beach Image + Title */}
        <header className="text-center mb-4 position-relative">
          {/* Beach Cover Photo */}
          <div
            className="position-relative w-100"
            style={{ height: "50vh", overflow: "hidden" }}
          >
            <img
              src="/images/IMG_9208.jpg"
              alt="Costa Rica Beach View"
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="display-3 mb-0 text-center mt-4">
            A Bridge to Art and Love
          </h1>
        </header>

        {/* Queer Art for Every Heart Section */}
        <h2 className="h2 fw-bold text-center mb-4">
          Queer Art for Every Heart
        </h2>

        {/* About Me Section */}
        <section
          id="about"
          className="d-flex flex-column align-items-center text-center mb-5"
        >
          <img
            src="/images/logo1.webp"
            alt="Bridge to Art and Love Logo"
            className="border border-white shadow-lg mb-3"
            style={{ height: "100px", width: "100px", objectFit: "cover" }}
          />
          <p className="text-center" style={{ maxWidth: "600px" }}>
            Hi! I'm Bridget, an artist passionate about creating expressive and
            bold canvas paintings. My work explores identity, love, and the
            beauty of everyday life. Thank you for supporting independent art!
          </p>
        </section>

        {/* Where to Find My Art */}
        <section className="text-center mb-5">
          <h2 className="h2 fw-bold">Where to Find My Art</h2>
          <Card
            className="bg-secondary text-white mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <Card.Body>
              <Calendar className="me-2" />
              <p className="h4 fw-bold">June 2025</p>
              <p>
                <a
                  href="https://lostfoxlowertown.com/"
                  target="_blank"
                  className="text-white text-decoration-underline"
                  style={{ cursor: "pointer" }}
                >
                  Lost Fox
                </a>
              </p>
              <p className="h4 fw-bold mt-3">July 2025</p>
              <p>
                <a
                  href="https://lostfoxlowertown.com/"
                  target="_blank"
                  className="text-white text-decoration-underline"
                  style={{ cursor: "pointer" }}
                >
                  Lost Fox
                </a>
              </p>
            </Card.Body>
          </Card>
        </section>

        {/* Shop My Art */}
        <section id="shop" className="text-center mb-5">
          <h2 className="h2 fw-bold">Shop My Art</h2>
          <Button
            variant="primary"
            href="your-etsy-shop-link.com"
            target="_blank"
          >
            <ShoppingBag className="me-2" /> Visit My Shop
          </Button>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="h2 fw-bold">Contact Us</h2>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="outline-light"
              href="mailto:info@bridgetoartandlove.com"
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

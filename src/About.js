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
import {
  Mail,
  Instagram,
  ShoppingBag,
  Calendar,
  HelpCircle,
  Palette,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="text-center mb-4">About Us</h1>

        {/* About Bridget - The Artist */}
        {/* About Us Section */}
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
          <h3 className="h3 fw-bold">Bridget - The Artist</h3>
          <p className="text-center" style={{ maxWidth: "600px" }}>
            Hi! I'm Bridget, an artist passionate about creating expressive and
            bold canvas paintings. My work explores identity, love, and the
            beauty of everyday life. Thank you for supporting independent art!
          </p>
          <h3 className="h3 fw-bold">Meghann - Co-Owner</h3>
          <p className="text-center" style={{ maxWidth: "600px" }}>
            Meghann handles the tech and business operations of Bridge to Art
            and Love. She is a CODA (Child of Deaf Adults) and works as a DevOps
            Lead Engineer for Convo, a VRS company, where accessibility and
            inclusion are central to her work. With a passion for efficiency and
            problem-solving, she ensures that everything behind the scenes runs
            smoothly so Bridget can focus on her art.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="h2 fw-bold">Contact Me</h2>
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
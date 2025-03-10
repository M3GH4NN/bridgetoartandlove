import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar"; // Import the new Navbar component

const artworks = [
  {
    title: "Traditional Pride Flag - Mini Canvas",
    img: "/images/minis/rainbow-a1.jpg",
    link: "https://www.etsy.com/listing/1872037246/mini-pride-rainbow-canvas-2x2in-hand",
  },
  {
    title: "Asexual Pride Flag - Mini Canvas",
    img: "/images/minis/ace-b1.jpg",
    link: "https://www.etsy.com/listing/1886267307/mini-asexual-pride-flag-canvas-2x2in",
  },
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
      <NavigationBar />
      <Container>
        <h1 className="text-center mb-4">Gallery</h1>
        <Row className="g-4">
          {artworks.map((art, index) => (
            <Col md={4} key={index}>
              {/* Wrap the card in an <a> tag to make it clickable */}
              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Card className="bg-secondary text-white">
                  <Card.Img variant="top" src={art.img} alt={art.title} />
                  <Card.Body>
                    <Card.Title>{art.title}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
        {/* Contact Section */}
        <Footer />
      </Container>
    </Container>
  );
}

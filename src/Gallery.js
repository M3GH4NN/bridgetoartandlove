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
  {
    title: "Lesbian Pride Flag - Mini Canvas",
    img: "images/minis/les-a1.jpg",
    link: "#",
  },
  {
    title: "Transgender Pride Flag - Mini Canvas",
    img: "images/minis/trans-a1.jpg",
    link: "#",
  },
  {
    title: "Pansexual Pride Flag - Mini Canvas - Glitter",
    img: "images/minis/pan-b1g.jpg",
    link: "#",
  },
  {
    title: "Lesbian Pride Flag - 4x4 Canvas",
    img: "/images/4x4/lez-a2.jpg",
    link: "https://www.etsy.com/listing/1886267307/mini-asexual-pride-flag-canvas-2x2in",
  },
  {
    title: "Lesbian Pride Flag - 4x4 Canvas - Glitter",
    img: "images/4x4/lez-b2g.jpg",
    link: "#",
  },
  {
    title: "Gay Male Pride Flag - 4x4 Canvas",
    img: "images/4x4/gay-a1.jpg",
    link: "#",
  },
  {
    title: "Gay Male Pride Flag - 4x4 Canvas",
    img: "images/4x4/gay-b1.jpg",
    link: "#",
  },
  {
    title: "Non-Binary Pride Flag - 4x4 Canvas",
    img: "images/4x4/nb-a1.jpeg",
    link: "#",
  },
  {
    title: "Non-Binary Pride Flag - 4x4 Canvas",
    img: "images/4x4/nb-b1.jpg",
    link: "#",
  },
  {
    title: "Genderqueer Pride Flag - 4x4 Canvas",
    img: "images/4x4/gq-a1.jpg",
    link: "#",
  },
  {
    title: "Genderqueer Pride Flag - 4x4 Canvas",
    img: "images/4x4/gq-b1.jpg",
    link: "#",
  },
  {
    title: "Transgender Pride Flag - 4x4 Canvas - Glitter",
    img: "images/4x4/trans-b1g.jpg",
    link: "#",
  },
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

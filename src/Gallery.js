import React from "react";
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
import { HashRouter as Link } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar"; // Import the new Navbar component

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
      <NavigationBar />
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

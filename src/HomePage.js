import React from "react";
import { Container, Card, Button, Nav, Navbar } from "react-bootstrap";
import { ShoppingBag, Calendar } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Link } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navbar"; // Import the new Navbar component

export default function BridgeToArtAndLove() {
  return (
    <Container
      fluid
      className="bg-dark text-white min-vh-100 py-4"
      style={{ fontFamily: "Tahoma, sans-serif" }}
    >
      {/* Navigation Bar */}
      <NavigationBar />
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
            A Bridge to Art & Love
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
            alt="A Bridge to Art & Love Logo"
            className="border border-white shadow-lg mb-3"
            style={{ height: "100px", width: "100px", objectFit: "cover" }}
          />
          <p className="text-center" style={{ maxWidth: "600px" }}>
            Hi! We are <i>A Bridge to Art & Love</i>, two passionate queer women
            creating bold, expressive canvas paintings inspired by pride flags.
            Our work celebrates the beauty and diversity of the LGBTQIA2S+
            community. Thank you for supporting independent art!
          </p>
        </section>

        {/* Where to Find Our Art */}
        <section className="text-center mb-5">
          <h2 className="h2 fw-bold">Where To Find Our Art</h2>
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

        {/* Shop Our Art */}
        <section id="shop" className="text-center mb-5">
          <h2 className="h2 fw-bold">Shop Our Art</h2>
          <Button
            variant="primary"
            href="your-etsy-shop-link.com"
            target="_blank"
          >
            <ShoppingBag className="me-2" /> Visit Our Shop
          </Button>
        </section>

        {/* Contact Section */}
        <Footer />
      </Container>
    </Container>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navbar"; // Import the new Navbar component

export default function About() {
  return (
    <Container
      fluid
      className="bg-dark text-white min-vh-100 py-4"
      style={{ fontFamily: "Tahoma, sans-serif" }}
    >
      {/* Navigation Bar */}
      <NavigationBar />
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
            alt="A Bridge to Art & Love Logo"
            className="border border-white shadow-lg mb-3"
            style={{ height: "100px", width: "100px", objectFit: "cover" }}
          />
          <h3 className="h3 fw-bold">Bridget - Artist and Co-Owner</h3>
          <img
            src="/images/pridge.jpg"
            alt="Bridget - Artist and Co-Owner"
            className="border border-white shadow-lg mb-3"
            style={{ height: "300px", width: "auto", objectFit: "cover" }}
          />
          <p className="text-center" style={{ maxWidth: "600px" }}>
            I'm Bridget, an artist who brings LGBTQ+ identity and pride to life
            through bold, expressive canvas paintings. I earned my arts degree
            from NYU Tisch School of the Arts, where I deepened my understanding
            of artistic expression. My work features artistic renditions of
            various pride flags, celebrating the beauty and diversity of the
            queer community.
          </p>

          <h3 className="h3 fw-bold">
            Meghann - Operations Manager and Co-Owner
          </h3>
          <img
            src="/images/IMG_20220410_183500.jpg"
            alt="Meghann - Operations Manager and Co-Owner"
            className="border border-white shadow-lg mb-3"
            style={{ height: "300px", width: "auto", objectFit: "cover" }}
          />
          <p className="text-center" style={{ maxWidth: "600px" }}>
            I'm Meghann, I handle the tech and business operations of{" "}
            <i>A Bridge to Art & Love</i>. I am a CODA (Child of Deaf Adults)
            and work as a DevOps Lead Engineer for Convo, a VRS company, where
            accessibility and inclusion are central to my work. With a passion
            for efficiency and problem-solving, I ensure that everything behind
            the scenes runs smoothly so Bridget can focus on her art.
          </p>
        </section>

        {/* Contact Section */}
        <Footer />
      </Container>
    </Container>
  );
}

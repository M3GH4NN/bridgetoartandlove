import React from "react";
import { Button } from "react-bootstrap";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: "#212529" }}>
      {/* Contact Buttons First */}
      <div className="d-flex justify-content-center gap-3 mb-2">
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

      {/* Ownership Statement Below */}
      <p className="text-white fw-bold mt-2">
        <span className="me-2">♀️</span> <strong>Woman-Owned</strong> &nbsp; |
        &nbsp;
        <span className="me-2">🤟</span> <strong>CODA-Owned</strong> &nbsp; |
        &nbsp;
        <span className="me-2">🏳️‍🌈</span> <strong>Queer-Owned</strong>
      </p>
    </footer>
  );
}

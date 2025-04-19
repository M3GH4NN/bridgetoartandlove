import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "info@bridgetoartandlove.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const renderTooltip = (props) => (
    <Tooltip id="email-tooltip" {...props}>
      {copied ? "Copied!" : "Click to copy"}
    </Tooltip>
  );

  return (
    <footer className="text-center py-4" style={{ backgroundColor: "#212529" }}>
      {/* Contact Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-2">
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <Button variant="outline-light" onClick={handleCopy}>
            <Mail className="me-2" /> Email
          </Button>
        </OverlayTrigger>

        <Button
          variant="outline-light"
          href="https://www.instagram.com/abridgetoartandlove/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="me-2" /> Instagram
        </Button>
      </div>

      {/* Ownership Statement */}
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

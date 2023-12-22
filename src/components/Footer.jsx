import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <footer className="mt-5">
      <Row className="text-center">
        <Col xs={6} className="offset-3">
          <Row>
            <Col xs={12} className="text-left mb-2">
              <i className="fa fa-facebook footer-icon"></i>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            {/* ... Altri elementi della griglia */}
          </Row>
          <Row>
            <Col xs={12} className="text-left mb-2">
              <Button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-left mb-2 mt-2 copyright">
              © 1997-2022 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

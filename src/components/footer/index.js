import React from 'react';
import { Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
const Footer = () => {
  return (
    <footer className="mt-auto">
      <Row className="bg-dark text-light site_Footer">
        <Col className="p-4">
          <Row lg={2} md={2} sm={1} className="row-cols-1  g-lg-2 g-md-3 g-5">
            <Col as="section">
              <h3
                className="text-center   fw-bolder"
                style={{ fontFamily: 'Roboto' }}
              >
                Sections of the site
              </h3>
              <Nav
                className="d-flex flex-column align-items-center text-capitalize gap-2"
                as="ul"
              >
                <Nav.Item as="li" className="text-center">
                  food recipe
                </Nav.Item>
                <Nav.Item as="li" className="text-center">
                  List of available foods
                </Nav.Item>
                <Nav.Item as="li" className="text-center">
                  Store desired foods
                </Nav.Item>
              </Nav>
            </Col>
            <Col as="section">
              <h3
                className="text-center   fw-bolder"
                style={{ fontFamily: 'Roboto' }}
              >
                folow by
              </h3>
              <Nav
                className="d-flex flex-column align-items-center text-capitalize gap-2"
                as="ul"
              >
                <Nav.Item as="li">
                  <Link to="/">
                    <i className="bi bi-instagram text-warning"></i>
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

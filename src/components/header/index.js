import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="top-0 sticky-top">
      <Row className="bg-dark">
        <Col>
          <Navigation />
        </Col>
      </Row>
    </header>
  );
};

export default Header;

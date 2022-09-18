import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './index.css';

const Introduction = () => {
  const dataIntroduction = useSelector((store) => store.introduction);
  const { text, url } = dataIntroduction;
  return (
    <Row sm={1} className="Introduction py-3 mt-4">
      <Col>
        <Row lg={2} md={2} sm={1} className="row-cols-1">
          <Col as="article" className="Introduction__Image">
            <Image fluid className="h-100 rounded-2" src={url} />
          </Col>
          <Col
            as="article"
            className="d-flex flex-column Introduction__Details"
          >
            <h1 className="text-capitalize text-center text-light d-flex gap-2 justify-content-center flex-wrap">
              welcome to <strong className="text-warning">food</strong>
              restuarent
            </h1>
            <p className="text-capitalize text-light  text-md-start  text-center lead">
              {text}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Introduction;

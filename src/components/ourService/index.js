import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ServiceItem from './ServiceItem';

const OurService = () => {
  const dataOfService = useSelector((store) => store.ourService);

  const renderServiceItem = () => {
    return dataOfService.map((item) => {
      return <ServiceItem item={item} key={Math.random() * 200 * 150} />;
    });
  };
  return (
    <Container className="m-lg-5 mt-3">
      <Row xs={1} className="gy-4">
        <Col className="d-flex flex-column align-items-center">
          <p className="text-center lead text-capitalize text-light w-75">
            Blame it on laziness or convenience, people prefer to order food
            online rather than leaving their homes to visit an eatery. All you
            need to do is scroll through the app to find your favorite dish and
            tap to order
          </p>
          <h2 className="text-warning" style={{ fontSize: '2.6rem' }}>
            OUR SERVICES
          </h2>
        </Col>
        <Col>
          <Row lg={3} md={2} xs={1} className="our_Service gx-2 gy-5">
            {renderServiceItem()}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default OurService;

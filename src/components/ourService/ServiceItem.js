import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './ServiceItem.css';
const ServiceItem = ({ item }) => {
  const { url, text, title } = item;

  return (
    <Col className="service_Item">
      <div className="w-100 d-flex flex-column align-items-center text-light gap-5">
        <section className="d-flex justify-content-center  service_Item-Head p-1 position-relative">
          <Image src={url} className="service_Item--Img" />
        </section>
        <section
          className="text-capitalize w-100 text-center"
          style={{ fontFamily: 'Roboto', fontSize: '1.4rem' }}
        >
          {title}
        </section>
      </div>
    </Col>
  );
};

export default ServiceItem;

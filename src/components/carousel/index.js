import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const CarouselMenu = () => {
  const dataCarousel = useSelector((store) => store.carousel);

  const renderCarouselItems = () => {
    return dataCarousel.map(({ url, text, title }) => {
      return (
        <Carousel.Item key={title} interval={3000}>
          <img
            className="img-fluid  w-100 img_Carousel"
            src={url}
            alt={text}
            loading="lazy"
          />
          <Carousel.Caption className="position_relative ">
            <h3 className="text-capitalize Carousel_Item--Title">{title}</h3>
            <p className="text-capitalize Carousel_Item--Text d-lg-block  d-none">
              {text}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  return (
    <Row className="Carousel_Menu">
      <Carousel style={{ margin: 0, padding: 0 }} fade>
        {renderCarouselItems()}
      </Carousel>
    </Row>
  );
};

export default CarouselMenu;

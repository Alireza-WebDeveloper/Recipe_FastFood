import React from 'react';
import './index.css';
import { Col, Row, Figure, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import settingSlider from './setting';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SliderMenu = () => {
  const dataSlider = useSelector((store) => store.slider);

  const renderSliderItem = () => {
    return dataSlider.map(({ url, title, date, name }) => {
      return (
        <section className="p-2 slider_Menu--Item " key={title}>
          <Figure className="w-100">
            <Figure.Image
              className="slider_Menu--Item_Img"
              rounded
              fluid
              alt={name}
              src={url}
              loading="lazy"
            />
            <Figure.Caption className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center justify-content-around flex-wrap">
                <section className="slider_Menu--Item_Date text-light d-flex gap-2">
                  <i className="bi bi-calendar-date"></i>
                  <span>{date}</span>
                </section>
                <section className="slider_Menu--Item_Title d-flex gap-1 ">
                  <span className="text-capitalize text-center  text-light">
                    {title}
                  </span>
                  <strong className="text-warning text-capitalize">
                    {name}
                  </strong>
                </section>
              </div>
              <div className="d-flex w-100 justify-content-start ps-0 ps-lg-2">
                <Link
                  className="btn btn-black text-capitalize w-100 btn-outline-warning"
                  to={`/list/${name}`}
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: '1.1rem',
                  }}
                >
                  Products
                </Link>
              </div>
            </Figure.Caption>
          </Figure>
        </section>
      );
    });
  };
  return (
    <Row className="Slider_Menu mt-4">
      <Col className="text-light">
        <Slider {...settingSlider}>{renderSliderItem()}</Slider>
      </Col>
    </Row>
  );
};

export default SliderMenu;

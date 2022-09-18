import React from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'react';
import ProductItem from './ProductItem';
import { Col, Container, Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
const Menu = () => {
  const ListOfProductName = useSelector(
    (store) => store.menu.ListOfProductName
  );

  const renderProducts = () => {
    return ListOfProductName.map((name) => {
      return <ProductItem name={name} key={Math.random() * 300} />;
    });
  };

  return (
    <Row xs={1} className="gy-3 py-2">
      <Col>
        <Row lg={2} xs={1}>
          <Col>
            <h2 className="text-light text-capitalize py-2">
              the list of products
            </h2>
            <p
              className="lead text-light gap-3 text-capitalize d-flex align-items-center"
              style={{ fontSize: '1.4rem' }}
            >
              You can copy and search the text of each box{' '}
              <i className="bi bi-clipboard icon_copyClipboard text-warning"></i>
            </p>
            <p className="text-warning">
              <strong>
                The best products available With the best quality available
              </strong>
            </p>
            <p className=" text-light text-capitalize lead">
              Names of all food products provided Access it by copying the name
              of each product and pasting it in the search section of the site
            </p>
          </Col>
          <Col>
            <Image
              fluid
              rounded
              src="https://img.freepik.com/free-photo/spices-black-background-space-text_169016-3118.jpg?w=826&t=st=1663485940~exp=1663486540~hmac=708089a5c1308e59a428f1f341cf2679f7c3146aae76dd77c7008d1a5b68e7d4"
            />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row as="div" xl={3} md={2} sm={1} xs={1} className="gx-3 gy-4 py-2">
          {renderProducts()}
        </Row>
      </Col>
    </Row>
  );
};

export default Menu;

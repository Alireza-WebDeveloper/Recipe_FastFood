import React from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'react';
import ProductItem from './ProductItem';
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
const Menu = () => {
  const ListOfProductName = useSelector(
    (store) => store.menu.ListOfProductName
  );

  const renderProducts = () => {
    return ListOfProductName.map((name) => {
      return <ProductItem name={name} key={Math.random()*300} />;
    });
  };

  return (
    <Row xs={1} className="gy-3">
      <Col>
        <h1 className="text-light text-capitalize py-2">
          the list of products
        </h1>
        <p
          className="lead text-light ps-2 gap-3 text-capitalize d-flex align-items-center"
          style={{ fontSize: '1.4rem' }}
        >
          You can copy and search the text of each box{' '}
          <i className="bi bi-clipboard icon_copyClipboard"></i>
        </p>
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

import React from 'react';
import { Card, Button, Col, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMyShopping } from '../../features/myShopping/myShoppingSlice';
import './ShopItem.css';
const ShopItem = ({ food }) => {
  const { title, publisher, id, image_url } = food;
  const dispatch = useDispatch();
  const removeFoodOfShop = () => {
    dispatch(removeMyShopping(id));
  };
  return (
    <Col className="shop_Item">
      <Card bg="dark" className="border border-0 border-warning">
        <Card.Img
          src={image_url}
          className="shop_Item--Img rounded-0 rounded-top"
          loading="lazy"
        />
        <Card.Body>
          <Card.Text className="d-flex  align-items-center gap-2">
            <Image
              fluid
              src="https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-326-128x128.png"
              style={{ width: '2.3rem' }}
              loading="lazy"
            />
            <span
              className="fw-bold text-light"
              style={{ fontFamily: 'Roboto', fontSize: '1.1rem' }}
            >
              {title}
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center flex-wrap">
          <Button
            variant="black"
            className="text-capitalize mt-2 w-50 text-light  btn-outline-danger  d-inline-block"
            style={{ fontFamily: 'Roboto', fontSize: '1.2rem' }}
            onClick={removeFoodOfShop}
          >
            remove cart
          </Button>
          <Link
            className="card-link text-capitalize fw-bold"
            to={`/single/${id}`}
            style={{
              fontFamily: 'Roboto',
              fontSize: '1.1rem',
            }}
          >
            more info...
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ShopItem;

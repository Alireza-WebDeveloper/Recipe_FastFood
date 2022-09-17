import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItem.css';
import { useDispatch } from 'react-redux';
import {
  addMyShopping,
  removeMyShopping,
} from '../../features/myShopping/myShoppingSlice';
const FoodItem = ({ food }) => {
  const { title, publisher, id, image_url } = food;
  const dispatch = useDispatch();
  const addFoodToShop = () => {
    dispatch(addMyShopping(food));
  };

  const removeFoodOfShop = () => {
    dispatch(removeMyShopping(id));
  };

  const renderOptionShop = () => {
    if (food.bookmarked) {
      return (
        <Button
          variant="black"
          className="text-capitalize mt-2 w-75 text-light  btn-outline-danger"
          style={{ fontFamily: 'Roboto' }}
          onClick={removeFoodOfShop}
        >
          remove cart
        </Button>
      );
    } else {
      return (
        <Button
          variant="black"
          className="text-capitalize mt-2 w-75  btn-outline-warning"
          style={{ fontFamily: 'Roboto' }}
          onClick={addFoodToShop}
        >
          add cart
        </Button>
      );
    }
  };
  return (
    <Col as="section" className="food_Item">
      <div className="w-100 d-flex align-items-center p-3 gap-2">
        <Link className="nav-item" to={`/single/${id}`}>
          <div className="food_Item-Target position-relative">
            <Image
              fluid
              src={image_url}
              className="Food_Item-Image"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="Food_Item-Details  w-100 flex-column">
          <section className="d-flex flex-column position-relative ps-1">
            <span className="h5 text-light">{title}</span>
            <span className="text-warning">{publisher}</span>
          </section>
          {renderOptionShop()}
        </div>
      </div>
    </Col>
  );
};

export default FoodItem;

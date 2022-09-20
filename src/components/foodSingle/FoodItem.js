import React from 'react';
import { Card, Image, Row, Col, Button } from 'react-bootstrap';
import './FoodItem.css';
import { useDispatch } from 'react-redux';
import {
  addMyShopping,
  removeMyShopping,
} from '../../features/myShopping/myShoppingSlice';
import { useMemo } from 'react';
const FoodItem = ({ food }) => {
  const { image_url, servings, cooking_time, id, publisher, title } = food;
  const { ingredients } = food;
  const dispatch = useDispatch();
  const addFoodToShop = () => {
    dispatch(addMyShopping(food));
  };

  const removeFoodOfShop = () => {
    dispatch(removeMyShopping(id));
  };
  const renderIngredientItem = useMemo(() => {
    if (!ingredients) return null;
    return ingredients.map(({ quantity, unit, description }) => {
      return (
        <Col
          className="text-capitalize  text-start"
          style={{ fontSize: '1.5rem' }}
          as="div"
          key={Math.random() * 200}
        >
          <section className="d-flex gap-2 ps-2 py-2 w-100   justify-content-center ">
            <span>{quantity || '1'}</span>
            <span>{unit || 'g'}</span>
            <span>{description}</span>
          </section>
        </Col>
      );
    });
  }, []);

  const renderOptionShop = () => {
    if (food.bookmarked) {
      return (
        <Button
          variant="black"
          className="text-capitalize mt-2 w-100 text-light  btn-outline-danger"
          style={{ fontFamily: 'Roboto', fontSize: '1.5rem' }}
          onClick={removeFoodOfShop}
        >
          remove cart
        </Button>
      );
    } else {
      return (
        <Button
          variant="black"
          className="text-capitalize mt-2 w-100  btn-outline-warning"
          style={{ fontFamily: 'Roboto', fontSize: '1.5rem' }}
          onClick={addFoodToShop}
        >
          add cart
        </Button>
      );
    }
  };
  return (
    <Row className=" gy-4">
      <Col className="d-flex flex-column" lg={5}>
        <section className="w-100">
          <Image
            rounded
            fluid
            src={image_url}
            className="food_Item-Single__Img"
            loading="lazy"
          />
        </section>
        <section className="w-100">{renderOptionShop()}</section>
      </Col>
      <Col lg={7} className="d-flex flex-column gap-4">
        <div>
          <h5
            className="text-center text-capitalize fw-bold text-light"
            style={{ fontSize: '2rem', fontFamily: 'Roboto' }}
          >
            {title}
          </h5>
        </div>
        <div className="w-100 d-flex justify-content-evenly text-light p-2">
          <section className="d-flex gap-2" style={{ fontSize: '1.7rem' }}>
            <i className="bi bi-clock text-warning"></i>
            <span>{cooking_time}min</span>
          </section>
          <section className="d-flex gap-2" style={{ fontSize: '1.7rem' }}>
            <i className="bi bi-people text-warning"></i>
            <span>{servings}</span>
          </section>
        </div>
        <div className="border-top py-3">
          <h4
            className="text-center text-capitalize display-6   text-warning"
            style={{ fontFamily: 'Robo' }}
          >
            recipe ingredient
          </h4>
          <Row lg={2} sm={1} className="text-light g-2 row-cols-1">
            {renderIngredientItem}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FoodItem;

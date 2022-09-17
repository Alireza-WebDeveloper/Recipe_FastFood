import React from 'react';
import { FetchSingleFood } from '../../features/foodSingle/foodSingleSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FoodItem from './FoodItem';
import { Row, Col, Container } from 'react-bootstrap';
import { updateFoodSingle_OfShopping } from '../../features/foodSingle/foodSingleSlice';
import SpinnerLoading from '../loader';
const FoodSingle = (props) => {
  const dispatch = useDispatch();
  const dataOfSingleFood = useSelector((store) => store.foodSingle);
  const dataOfMyShopping = useSelector((store) => store.myShopping.list);
  const renderSingleFood = () => {
    return <FoodItem food={dataOfSingleFood.single} />;
  };
  useEffect(() => {
    dispatch(updateFoodSingle_OfShopping(dataOfMyShopping));
  }, [dataOfSingleFood]);
  useEffect(() => {
    dispatch(FetchSingleFood(props.match.params.id));
  }, [props.match.params.id]);
  if (dataOfSingleFood.loading) return <SpinnerLoading />;
  if (dataOfSingleFood.error) return null;

  return (
    <Container>
      <Row className="py-2">
        <Col>{renderSingleFood()}</Col>
      </Row>
    </Container>
  );
};

export default FoodSingle;

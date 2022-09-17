import React from 'react';
import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSearchFood } from '../../features/foodList/foodListSlice';
import { updateFoodList_OfShopping } from '../../features/foodList/foodListSlice';
import FoodItem from './FoodItem';
import SpinnerLoading from '../loader';
const FoodList = (props) => {
  const dispatch = useDispatch();
  const dataOfSearch = useSelector((store) => store.foodList);
  const dataOfMyShopping = useSelector((store) => store.myShopping.list);
  /// Update FoodList With LocalStorage(myShopping)
  // زمانی که دیتا کاملا آپدیت شد و اوکی بود
  useEffect(() => {
    dispatch(updateFoodList_OfShopping(dataOfMyShopping));
  }, [dataOfSearch]);
  /// Update FoodList With Async Request Params Site
  useEffect(() => {
    dispatch(FetchSearchFood(props.match.params.query));
  }, [props.match.params.query]);
  if (dataOfSearch.loading) return <SpinnerLoading />;
  if (dataOfSearch.error || dataOfSearch.list.length < 1) return null;
  console.log(dataOfSearch);
  const renderFoodItem = () => {
    return dataOfSearch.list.map((food) => {
      return <FoodItem food={food} key={food.id} />;
    });
  };
  return (
    <Container>
      <Row
        xxl={3}
        md={2}
        sm={1}
        xs={1}
        className="g-2 py-2
    "
      >
        {renderFoodItem()}
      </Row>
    </Container>
  );
};

export default FoodList;

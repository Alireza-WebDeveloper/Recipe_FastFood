import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import ShopItem from './ShopItem';
import ShopEmpty from './ShopEmpty';
const MyShopping = () => {
  const dataOfMyShopping = useSelector((store) => store.myShopping.list);
  const renderShopItem = () => {
    return dataOfMyShopping.map((food) => {
      return <ShopItem key={food.id} food={food} />;
    });
  };
  const renderShopEmpty = () => {
    return <ShopEmpty message="Your store is empty" />;
  };
  if (dataOfMyShopping.length < 1) return renderShopEmpty();
  return (
    <Container fluid="xl">
      <Row lg={3} md={2} sm={1} xs={1} className="g-lg-4  gy-4  py-3">
        {renderShopItem()}
      </Row>
    </Container>
  );
};

export default MyShopping;

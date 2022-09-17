import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './NavigationMyShoppingLink.css';
import { Badge } from 'react-bootstrap';
const NavigationMyShoppingLink = () => {
  const totalOfMyShop = useSelector((store) => store.myShopping.total);
  const myShopping = useSelector((store) => store.myShopping);
  return (
    <Nav.Item as="li">
      <NavLink
        to="/myShopping"
        exact
        className="position-relative text-light nav-link"
        activeClassName="active_NavLink"
      >
        <section className="position-relative d-inline ">
          <i
            className="bi bi-cart2 text-warning shop_Icon"
            style={{ fontSize: '1.9rem' }}
          ></i>
          <Badge
            pill
            bg="danger"
            className="position-absolute  bottom-50 start-50"
          >
            {totalOfMyShop}
          </Badge>
        </section>
      </NavLink>
    </Nav.Item>
  );
};

export default NavigationMyShoppingLink;

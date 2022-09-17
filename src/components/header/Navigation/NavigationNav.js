import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationNav.css';
import { useSelector } from 'react-redux';
import NavigationMyShoppingLink from './NavigationMyShoppingLink';
const NavigationNav = () => {
  return (
    <Nav
      as="ul"
      className="navigation_Nav text-capitalize flex-grow-1 justify-content-around"
    >
      <Nav.Item as="li">
        <NavLink
          to="/"
          exact
          className="text-light nav-link position-relative"
          activeClassName="active_NavLink"
        >
          home
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/menuList"
          exact
          className="text-light nav-link position-relative"
          activeClassName="active_NavLink"
        >
          menu
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink
          to="/aboutus"
          exact
          className="text-light nav-link position-relative"
          activeClassName="active_NavLink"
        >
          about us
        </NavLink>
      </Nav.Item>
      <NavigationMyShoppingLink />
    </Nav>
  );
};

export default NavigationNav;

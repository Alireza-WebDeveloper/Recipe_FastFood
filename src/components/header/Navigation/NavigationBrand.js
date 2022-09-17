import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBrand.css';
const NavgitaionBrand = () => {
  return (
    <Navbar.Brand
      as="section"
      className="navigation_Brand text-capitalize text-light position-relative d-flex align-items-center"
    >
      <img
        src="https://free3dicon.com/wp-content/uploads/2022/08/perspective_matte-317-128x128.png"
        className="navigation_Brand--Logo"
      />
      <section className="navigation_Brand--Header">food</section>
    </Navbar.Brand>
  );
};

export default NavgitaionBrand;

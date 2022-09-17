import React from 'react';
import { Nav, Navbar, Badge, Form, Button } from 'react-bootstrap';
import NavgitaionBrand from './NavigationBrand';
import NavigationForm from './NavigationForm';
import NavigationNav from './NavigationNav';
const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="Navigation  gap-lg-0 gap-4 "
    >
      <NavgitaionBrand />
      <Navbar.Toggle className="navigation_Toggle" />
      <Navbar.Collapse id="navbarScroll">
        <NavigationForm />
        <NavigationNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

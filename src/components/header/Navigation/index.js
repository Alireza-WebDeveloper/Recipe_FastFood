import React from 'react';
import { Nav, Navbar, Badge, Form, Button } from 'react-bootstrap';
import NavgitaionBrand from './NavigationBrand';
import NavigationForm from './NavigationForm';
import NavigationNav from './NavigationNav';
import NavigationSwitchTheme from './NavigationSwitchTheme';
const Navigation = () => {
  return (
    <Navbar
      expand="xl"
      bg="dark"
      variant="dark"
      className="Navigation  gap-lg-0 gap-4 "
    >
      <NavgitaionBrand />
      <Navbar.Toggle className="navigation_Toggle" />
      <Navbar.Collapse id="navbarScroll" className='gap-2'>
        <NavigationForm />
        <NavigationNav />
        <NavigationSwitchTheme />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

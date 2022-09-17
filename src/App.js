import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarouselMenu from './components/carousel';
import Footer from './components/footer';
import Header from './components/header';
import Introduction from './components/introduction';
import SliderMenu from './components/slider';
import FoodList from './components/foodList';
import FoodSingle from './components/foodSingle';
import MyShopping from './components/myShopping';
import Menu from './components/menu';
import Notification from './Notification';
import PageNotFound from './components/pageNotFound';
const App = () => {
  return (
    <BrowserRouter>
      <Notification />
      <Header />
      <Switch>
        <Route exact path="/">
          <CarouselMenu />
          <Introduction />
          <SliderMenu />
        </Route>
        <Route exact path="/list/:query" component={FoodList}></Route>
        <Route exact path="/single/:id" component={FoodSingle}></Route>
        <Route exact path="/myShopping" component={MyShopping}></Route>
        <Route exact path="/menuList" component={Menu}></Route>
        <Route exact component={PageNotFound}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

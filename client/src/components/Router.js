import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AddingPlants from "routes/AddingPlants";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Signup from "routes/Signup";
import Header from "./Header";
import Navigation from "./Navigation";

const MyRouter = (props) => {
  const {isLogin, setIsLogin} = props;
  return (
    <BrowserRouter>
      <div className="initialBlock">
        <Header isLogin={isLogin} />
        <Navigation isLogin={isLogin} />
        <Switch>
          <Route exact path="/">
            <Home isLogin={isLogin} />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/profile">
            <Profile isLogin={isLogin} />
          </Route>
          <Route exact path="/adding-plants">
            <AddingPlants isLogin={isLogin} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default MyRouter;

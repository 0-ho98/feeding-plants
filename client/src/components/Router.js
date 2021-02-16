import React, { useState } from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home"
import Profile from "routes/Profile";
import Header from "./Header";
import Navigation from "./Navigation";

const MyRouter = () => {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <BrowserRouter>
            <Header isLogin={isLogin}/>
            <Navigation isLogin={isLogin}/>
            <Switch>
                <Route exact path="/">
                    <Home isLogin={isLogin}/>
                </Route>
                <Route exact path="/auth">
                    <Auth/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default MyRouter;

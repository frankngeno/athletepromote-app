import React, { Component } from 'react';
import Header from '../header/Header';
import SignUp from '../sign-up/SignUp';
import Home from '../home/Home'

import style from './layout.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div>
                
                <Header />
                
                <div className="container routes-wrapper">
                    <Switch>
                        <Route exact path="/" component={() => <Home /> }/>
                        <Route exact path="/signup" component={() => <SignUp /> }/>
                    </Switch>
                </div>

                <footer />
                
            </div>
        );
    }
}

export default Layout;
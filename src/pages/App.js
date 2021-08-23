import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../css/index.css';
import Home from './Home';
import Header from '../componants/Header';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import Footer from '../componants/Footer';



function App () {
 
    const [token, setToken] = useState();

    if(!token) {
      return (
        <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <SignIn setToken={setToken}/>
            </Route>
        </Switch> 
        <Footer/>
      </Router>
    )
    }
    return (
        <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
        </Switch> 
        <Footer/>
      </Router>
    )
}

export default App
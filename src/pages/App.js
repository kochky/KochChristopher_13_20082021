import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect} from 'react-redux'
import { useSelector } from "react-redux";
import '../css/index.css';
import Home from './Home';
import Header from '../componants/Header';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import Footer from '../componants/Footer';
import ErrorPage from '../pages/404'



function App () {
 
  useSelector((state)=>{
    if(state.remember){
      localStorage.setItem("email", state.email);
      localStorage.setItem("password",state.password);
      localStorage.setItem("firstname", state.firstname);
      localStorage.setItem("lastname",state.lastname);
      localStorage.setItem("id", state.id);
      localStorage.setItem("auth", state.auth);
      localStorage.setItem("token", state.token);
      localStorage.setItem("error", state.error);
      localStorage.setItem("loading", state.loading);
      localStorage.setItem("remember", state.remember);
    }else {
      sessionStorage.setItem("email", state.email);
      sessionStorage.setItem("password",state.password);
      sessionStorage.setItem("firstname", state.firstname);
      sessionStorage.setItem("lastname",state.lastname);
      sessionStorage.setItem("id", state.id);
      sessionStorage.setItem("auth", state.auth);
      sessionStorage.setItem("token", state.token);
      sessionStorage.setItem("error", state.error);
      sessionStorage.setItem("loading", state.loading);
      sessionStorage.setItem("remember", state.remember);
  
      }
    }
  )

const auth= useSelector((state)=> state.auth)


    if(!auth) {
      return (
        <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <SignIn/>
            </Route>
            <Route >
              <ErrorPage />
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
            <Route path="/login">
              <SignIn/>
            </Route>
             <Route>
               <ErrorPage />
            </Route>
        </Switch> 
        <Footer/>
      </Router>
    )
 }
const mapStateToProps= (state) => { 
    return state
}

export default connect(mapStateToProps)(App)
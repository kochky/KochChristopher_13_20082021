import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect} from 'react-redux'
import '../css/index.css';
import Home from './Home';
import Header from '../componants/Header';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import Footer from '../componants/Footer';
import ErrorPage from '../pages/404'



function App (props) {

    useEffect(() => {
      if(props.remember){
        localStorage.setItem("user",JSON.stringify(props))
      }else if (!props.remember && Object.keys(localStorage).length===0) {
        sessionStorage.setItem("user",JSON.stringify(props))
        }
    }, [props])
     
    if(!props.auth) {
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
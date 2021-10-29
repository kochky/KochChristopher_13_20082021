import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect} from 'react-redux'
import '../css/index.css';
import Home from './Home';
import Header from '../componants/Header';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import Footer from '../componants/Footer';
import ErrorPage from '../pages/404'

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuth= restOfProps.state.auth
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuth ? <Component {...props}/> : <Redirect to="/signin" />
      }
    />
  );
}

function App (state) {

    useEffect(() => {
      if(state.remember){
        localStorage.setItem("user",JSON.stringify(state))
      }else if (!state.remember && Object.keys(localStorage).length===0) {
        sessionStorage.setItem("user",JSON.stringify(state))
        }
    }, [state])
     
    return (
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute state={state} path="/user" component={User} />
            <Route path="/signin">
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
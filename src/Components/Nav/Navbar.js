import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Login from "../Auth/Sign-Log/Login";
import Register from "../Auth/Sign-Log/Signup";

import Landing from "../Landing/LandingPage";
import CharacterIndex from '../Character/CharacterIndex';
import "./navbar.css";
import Create from "../Character/CharCreate";
import {Context} from '../../Context';

//! Here we get props (props.token)
export default function Navigation(props) {

  const {clearToken} = useContext(Context)

  return (
    <Router>
      <ul>
        <li>
          <NavLink
            className='nav-bg home'
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-bg'
            to="/login"
            activeClassName="main-nav-active"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="main-nav nav-bg"
            activeClassName="main-nav-active"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-bg'
            to="/create"
            activeClassName="main-nav-active"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            className='nav-bg'
            to="/account"
            activeClassName="main-nav-active"
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
          className="defaulClear nav-bg"
            to="/"
            onClick={clearToken}
          >
            Logout
          </NavLink>
        </li>
      </ul>


      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/create">
          {/* And here we send token one more time as (token) to the Create */}
          <Create token={props.token}/>
        </Route>
        <Route path="/account">
          <CharacterIndex />
        </Route>
      </Switch>
    </Router>
  );
}

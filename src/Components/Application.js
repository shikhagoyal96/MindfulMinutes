import React, { Component, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Meditation from './Meditation';
import Intro from './Intro';
import MonkMode from './MonkMode';
import AboutUs from './AboutUs';
import Login from '../pages/Login/Login';
import MedSignUp from '../pages/MedSignUp/MedSignUp';
import MedSignedUp from '../pages/MedSignedUp/MedSignedUp';
import facebooklogo from '../images/facebooklogowhite.png';
import instalogo from '../images/instagramlogowhite.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/DMSans-Regular.ttf';
import '../fonts/DMSans-Bold.ttf';
import { Link } from 'react-scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const Application = () => {
  const user = useContext(UserContext);
  const clicked = useContext(UserContext);
  return (user && clicked) ? (
    <MedSignedUp></MedSignedUp>
  ) : (
    <Router>
      <div className="App">
        <Navbar collapseOnSelect className="nav" expand="lg" sticky="top">
          <Navbar.Brand href="/" bsPrefix="navbar-title">
            Mindful Minutes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav fill="true">
              <Nav.Link className="nav-items">
                <RouterLink to="/meditationsignup">
                  Meditation Sessions
                </RouterLink>
              </Nav.Link>
              <Nav.Link className="nav-items">
                <Link
                  style={{ marginTop: '20px' }}
                  to="monkmode"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p className="nav-items">Monk Mode</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-items">
                <Link
                  style={{ marginTop: '20px' }}
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p className="nav-items">About Us</p>
                </Link>
              </Nav.Link>
              {/* <Nav.Link className="nav-items">
                  <RouterLink to="/login">Login</RouterLink>
                </Nav.Link> */}
              <Nav.Link href="https://www.facebook.com/groups/2482762308645826">
                <img className="nav-logo" src={facebooklogo} alt="fb" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/the.mindfulminutes/">
                <img className="nav-logo" src={instalogo} alt="insta" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/meditationsignup">
            <MedSignUp />
          </Route>
          <Route path="/thankyou">
            <MedSignedUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Intro />
            <Meditation />
            <MonkMode />
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Application;

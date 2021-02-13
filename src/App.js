import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Meditation from './Components/Meditation';
import Intro from './Components/Intro';
import MediaQuery from 'react-responsive';
import MonkMode from './Components/MonkMode';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Leap from './Components/Leap';
import MeditationPage from './pages/Meditation/Meditation';
import Login from './pages/Login/Login';
import Footer from './Components/Footer';
import Careers from './pages/Careers/Careers';
import MedSignUp from './pages/MedSignUp/MedSignUp';
import MedSignedUp from './pages/MedSignedUp/MedSignedUp';
import Thankyoucareers from './pages/Applied/Thankyoucareers';
import facebooklogo from './images/fblogo.svg';
import instalogo from './images/iglogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './fonts/DMSans-Regular.ttf';
import './fonts/DMSans-Bold.ttf';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, useHistory, Switch, Route, Link as RouterLink } from 'react-router-dom';
import UserProvider from './providers/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div style={{ height: '100vh', width: '100vw', overflowX: 'hidden' }}>
          <MediaQuery minDeviceWidth={1024}>
            <Navbar style={{ height: '10vh', paddingLeft: '4em' }} collapseOnSelect className="nav" expand="lg" sticky="top">
              <Navbar.Brand href="/" style={{ fontFamily: 'DMSans-Bold', fontSize: '2.5vw', color: '#2c354a' }}>
                Mindful Minutes
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav.Link style={{ marginLeft: '0%' }} href="/meditation" className="nav-items">
                    Meditation Sessions
                  </Nav.Link>
                  <Nav.Link href="/monkmode" className="nav-items">
                    Monk Mode
                  </Nav.Link>
                  <Nav.Link href="/leap" className="nav-items">
                    Leap
                  </Nav.Link>
                  <Nav.Link href="/careers" className="nav-items">
                    Opportunities
                  </Nav.Link>
                  
                  {/* <Nav.Link className="nav-items">
                    <RouterLink to="/blog">Blog</RouterLink>
                  </Nav.Link> */}
                  <Nav.Link href="https://www.instagram.com/the.mindfulminutes/">
                    <img className="nav-logo" src={instalogo} alt="insta" />
                  </Nav.Link>
                  <Nav.Link style={{ marginLeft: '-5%' }} href="https://www.facebook.com/the.mindfulminutes">
                    <img className="nav-logo" src={facebooklogo} alt="fb" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023.9}>
            <Navbar style={{ paddingLeft: '4em' }} collapseOnSelect className="nav" expand="lg" sticky="top">
              <Navbar.Brand href="/" style={{ fontFamily: 'DMSans-Bold', fontSize: '2em', color: '#2c354a' }}>
                Mindful Minutes
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav.Link style={{ marginLeft: '0%' }} href="/meditation" className="nav-items-mobile">
                    Meditation Sessions
                  </Nav.Link>
                  <Nav.Link href="/monkmode" className="nav-items-mobile">
                    Monk Mode
                  </Nav.Link>
                  <Nav.Link href="/leap" className="nav-items-mobile">
                    Leap
                  </Nav.Link>
                  <Nav.Link href="/careers" className="nav-items-mobile">
                    Opportunities
                  </Nav.Link>
                  
                  {/* <Nav.Link className="nav-items">
                    <RouterLink to="/blog">Blog</RouterLink>
                  </Nav.Link> */}

                  <Nav.Link href="https://www.instagram.com/the.mindfulminutes/" className="nav-items-mobile">
                    Instagram
                  </Nav.Link>

                  <Nav.Link href="https://www.facebook.com/the.mindfulminutes" className="nav-items-mobile">
                    Facebook
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </MediaQuery>
          <Switch>
            <Route path="/monkmode">
              <MonkMode />
              <Footer></Footer>
            </Route>
            <Route path="/meditation">
              <MeditationPage></MeditationPage>
              <Footer></Footer>
            </Route>
            <Route path="/meditationsignup">
              <MedSignUp />
            </Route>
            <Route path="/thankyou">
              <MedSignedUp />
            </Route>
            <Route path="/thankyoucareers">
              <Thankyoucareers />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/leap">
              <Leap />
            </Route>
            {/* <Route path="/login">
                <Login />
              </Route> */}
            <Route path="/">
              <Intro />
              <Meditation />
              <AboutUs />
              <ContactUs></ContactUs>
              <Footer></Footer>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;

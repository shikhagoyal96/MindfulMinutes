import React, { Fragment, useEffect } from 'react';
import logo from '../images/headlogo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import currinit from '../images/AllCurrentInitiatives.png';
import {analytics} from '../firebase';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Section({ title, dark, id }) {
  useEffect(() => {
    analytics.logEvent('notification_received');
    console.log(2342);
  }, [])
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={1024}>
        <div className={'intro'} style={{ paddingLeft: '1.8em' }}>
          <div className="intro-content" id="intro">
            <Row>
              <Col className="col-6 theult">
                <h1 id="thenew" style={{ color: '#2C354A', fontSize: '4vw' }}>
                  The new era of
                </h1>
                <h1 id="thenew" style={{ color: '#2C354A', fontSize: '4vw', marginTop: '0' }}>
                  personal development
                </h1>
                <h1 id="thenew" style={{ color: '#2C354A', fontSize: '4vw', marginTop: '0' }}>
                  and well-being.
                </h1>
                <h2 style={{ color: '#808080', fontSize: '1.75vw' }}>We are a Mental-Health focused tech-startup,</h2>
                <h2 style={{ color: '#808080', fontSize: '1.75vw', marginTop: '-0.7vh' }}>driving innovation within the personal development</h2>
                <h2 style={{ color: '#808080', fontSize: '1.75vw', marginTop: '-0.7vh' }}>space, encouraging everyone on this inclusive journey</h2>
                <h2 style={{ color: '#808080', fontSize: '1.75vw', marginTop: '-0.7vh' }}>to take a step forward.</h2>
              </Col>
              <Col className="col-6">
                <img src={logo} className="intro-logo" alt="Logo" />
              </Col>
            </Row>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023.9}>
        <div className={'intro'}>
          <div className="intro-content" id="intro">
            <h1 id="thenew" style={{ color: '#2C354A', fontSize: '8.5vw', marginTop: '0', textAlign: 'center' }}>
              The new era of personal development and well-being.
            </h1>
            <h2 style={{ color: '#808080', fontSize: '6vw', textAlign: 'center' }}>
              We are a Mental-Health focused tech-startup, driving innovation within the personal development space, encouraging everyone on this inclusive journey to take a step
              forward.
            </h2>
            <img src={logo} className="intro-logo-mobile" alt="Logo" />
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
}

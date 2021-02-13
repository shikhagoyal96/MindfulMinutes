import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutUs from '../images/dev.png';
import Footer from './Footer';
import MediaQuery from 'react-responsive';
export default function Section() {
  return (
    <div
      className={'aboutus'}
      id="aboutus"
      style={{
        background: '#DDDDDA',
      }}
    >
      <div className={'section-content'}>
        <Container>
          <Row>
            <MediaQuery minDeviceWidth={1024}>
              <Col className="col-6">
                <Row>
                  <div>
                    <h4 style={{ color: 'black', fontSize: '2vw', fontFamily: 'DMSans-Bold' }}>Our Story:</h4>
                    <h3 style={{ fontSize: '3vw', fontFamily: 'DMSans-Bold' }}>About Us</h3>
                  </div>
                </Row>
                <Row>
                  <div className={'textBlock'}>
                    <h5 style={{ fontFamily: 'DMSans-Bold', color: 'black', fontSize: '1.9vw', marginTop: '-6vh' }}>Have an inspiring idea?</h5>
                    <p style={{ color: 'black', fontSize: '1.1vw', fontFamily: 'DMSans' }}>
                      Contact us to join our team! Let’s work together, grow this organization and make an impact!
                    </p>
                    <h5 style={{ fontFamily: 'DMSans-Bold', color: 'black', marginTop: '1vh', fontSize: '1.9vw' }}>
                      Are you a company, organization, campus club or an individual?
                    </h5>
                    <p style={{ color: 'black', fontSize: '1.1vw', fontFamily: 'DMSans' }}>
                      Let’s work together! Contact us for a partnership. We have a unique opportunity for everyone!
                    </p>
                  </div>
                </Row>
              </Col>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1023.9}>
              <div>
                <h4 style={{ color: 'black', fontSize: '2em', fontFamily: 'DMSans-Bold' }}>Our Story:</h4>
                <h3 style={{ fontSize: '3em', fontFamily: 'DMSans-Bold' }}>About Us</h3>
                <h5 style={{ fontFamily: 'DMSans-Bold', color: 'black', fontSize: '1.8em', marginTop: '-2%' }}>Have an inspiring idea?</h5>
                <p style={{ color: 'black', fontSize: '1.4em', fontFamily: 'DMSans' }}>
                  Contact us to join our team! Let’s work together, grow this organization and make an impact!
                </p>
                <h5 style={{ fontFamily: 'DMSans-Bold', color: 'black', marginTop: '1vh', fontSize: '1.8em' }}>Are you a company, organization, campus club or an individual?</h5>
                <p style={{ color: 'black', fontSize: '1.4em', fontFamily: 'DMSans', marginBottom: '5vh' }}>
                  Let’s work together! Contact us for a partnership. We have a unique opportunity for everyone!
                </p>
              </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1024}>
              <Col className="col-6">
                <Row>
                  <Col >
                    <img src={aboutUs} className="devImg" alt="monk" />
                  </Col>
                  <Col >
                    <div className="subtitle">
                      <h2 style={{paddingLeft:'1.5vw'}} color="black">Dev Parekh</h2>
                      <h4 style={{ color: 'black',paddingLeft:'1.5vw' }}>Founder</h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="text">
                    <p style={{ color: 'black', marginTop: '5vh' }}>
                      Thank you for your support and interaction with our organization. As we strive towards continuous growth and improvement, we ensure to provide an experience
                      that helps individuals become the best versions of themselves. It is our goal and promise to you that any affiliation that you have with Mindful Minutes will
                      leave an everlasting smile on your face. Remember, each and everyone of you is welcome!
                    </p>
                  </div>
                </Row>
              </Col>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1023.9}>
              <Row>
                <Col className="col-6">
                  <img src={aboutUs} className="devImgmobile" alt="monk" />
                </Col>
                <Col className="col-6">
                  <div className="subtitle" style={{ marginLeft: '5vw' }}>
                    <h2 color="black">Dev Parekh</h2>
                    <h4>Founder</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <div style={{marginTop:'3vh'}} className="text">
                  <p style={{ color: 'black', fontSize:'1.4em' }}>
                    Thank you for your support and interaction with our organization. As we strive towards continuous growth and improvement, we ensure to provide an experience
                    that helps individuals become the best versions of themselves. It is our goal and promise to you that any affiliation that you have with Mindful Minutes will
                    leave an everlasting smile on your face. Remember, each and everyone of you is welcome!
                  </p>
                </div>
              </Row>
            </MediaQuery>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import snap from '../images/snapchat.png';
import messenger from '../images/messenger.png';
import notion from '../images/notion.png';
import zoom from '../images/zoom.png';
import AutoPlay from './MonkSlider';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
export default function Section() {
  return (
    <div className={'monkmode'} id="monkmode">
      <div className={'section-content'}>
        <Container>
          <MediaQuery minDeviceWidth={1024}>
            <h1
              style={{
                color: '#BC5E23',
                marginTop: '0',
                fontFamily: 'DMSans-Bold',
                fontSize: '5vw',
                textAlign: 'center',
              }}
            >
              MONK MODE
            </h1>
            <h2
              style={{
                fontFamily: 'DMSans',
                marginTop: '2vh',
                color: '#BC5E23',
                textAlign: 'center',
                fontSize: '2vw',
              }}
            >
              The Power of Redirection
            </h2>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023.9}>
            <h1
              style={{
                color: '#BC5E23',
                marginTop: '0',
                fontFamily: 'DMSans-Bold',
                fontSize: '3em',
                textAlign: 'center',
              }}
            >
              MONK MODE
            </h1>
            <h2
              style={{
                fontFamily: 'DMSans',
                marginTop: '2vh',
                color: '#BC5E23',
                textAlign: 'center',
                fontSize: '2em',
              }}
            >
              The Power of Redirection
            </h2>
          </MediaQuery>
          <Row className={'row justify-content-center'} style={{ marginTop: '-5%' }}>
            <div className={'apps'}>
              <MediaQuery minDeviceWidth={1024}>
                <Row className={'row justify-content-center'}>
                  <div className={'appBox'}>
                    <Col>
                      <Row>
                        <Col className="col-3">
                          <img src={snap} className="appimg" alt="snapchat" />
                        </Col>
                        <Col>
                          <h2 style={{ fontSize: '2vw' }}>Snapchat</h2>
                          <p style={{ fontSize: '1.1vw' }}>Capture our daily accomplishments & motivate each other!</p>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div className={'appBox'}>
                    <Col>
                      <Row>
                        <Col className="col-3">
                          <img src={messenger} className="appimg" alt="messenger" />
                        </Col>
                        <Col>
                          <h2 style={{ fontSize: '2vw' }}>Messenger</h2>
                          <p style={{ fontSize: '1.1vw' }}>Converse with other MONKS & cultivate a friendly environment!</p>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Row>
                <Row className={'row justify-content-center'}>
                  <div className={'appBox'}>
                    <Col>
                      <Row>
                        <Col className="col-3">
                          <img src={notion} className="appimg" alt="notion" />
                        </Col>
                        <Col>
                          <h2 style={{ fontSize: '2vw' }}>Notion</h2>
                          <p style={{ fontSize: '1.1vw' }}>An online database to track goals & increase accountability!</p>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div className={'appBox'}>
                    <Col>
                      <Row>
                        <Col className="col-3">
                          <img src={zoom} className="appimg" alt="zoom" />
                        </Col>
                        <Col>
                          <h2 style={{ fontSize: '2vw' }}>Zoom</h2>
                          <p style={{ fontSize: '1.1vw' }}>Weekly debrief meetings to share, learn & grow together!</p>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Row>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1023.9}>
                <div className={'appBoxMobile'}>
                  <Col>
                    <Row>
                      <Col className="col-3">
                        <img src={snap} className="appimg-mobile" alt="snapchat" />
                      </Col>
                      <Col>
                        <h2>Snapchat</h2>
                        <p>Capture our daily accomplishments & motivate each other!</p>
                      </Col>
                    </Row>
                  </Col>
                </div>
                <div className={'appBoxMobile'}>
                  <Col>
                    <Row>
                      <Col className="col-3">
                        <img src={messenger} className="appimg-mobile" alt="messenger" />
                      </Col>
                      <Col>
                        <h2>Messenger</h2>
                        <p>Converse with other MONKS & cultivate a friendly environment!</p>
                      </Col>
                    </Row>
                  </Col>
                </div>
                <div className={'appBoxMobile'}>
                  <Col>
                    <Row>
                      <Col className="col-3">
                        <img src={notion} className="appimg-mobile" alt="notion" />
                      </Col>
                      <Col>
                        <h2>Notion</h2>
                        <p>An online database to track goals & increase accountability!</p>
                      </Col>
                    </Row>
                  </Col>
                </div>
                <div className={'appBoxMobile'}>
                  <Col>
                    <Row>
                      <Col className="col-3">
                        <img src={zoom} style={{ marginBottom: '2vh' }} className="appimg-mobile" alt="zoom" />
                      </Col>
                      <Col>
                        <h2>Zoom</h2>
                        <p>Weekly debrief meetings to share, learn & grow together!</p>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </MediaQuery>
            </div>
          </Row>

          <MediaQuery minDeviceWidth={1024}>
            <h2 style={{ textAlign: 'center', fontStyle: 'italic', marginLeft: '10vw', marginRight: '10vw', marginTop: '5vh', fontSize: '1.5em' }}>
              We aim to better our physical & mental health by refocusing our energy from degrading habits onto better ones.{' '}
            </h2>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1023.9}>
            <h2 style={{ textAlign: 'center', fontStyle: 'italic', marginLeft: '5vw', marginRight: '5vw', marginTop: '5vh', fontSize: '1.5em' }}>
              We aim to better our physical & mental health by refocusing our energy from degrading habits onto better ones.{' '}
            </h2>
          </MediaQuery>
        </Container>
      </div>
      <div style={{ background: '#E4DDD3', minWidth: '100%', paddingTop: '5vh' }}>
        <h2
          style={{
            fontFamily: 'DMSans-Bold',
            textAlign: 'center',
            fontSize: '3vw',
            borderBottom: '2px solid #BC5E23',
            marginLeft: '20vw',
            marginRight: '20vw',
            paddingBottom: '2vh',
          }}
        >
          A Personal Development Group
        </h2>
        <Container style={{ marginTop: '10vh' }}>
          <AutoPlay />
        </Container>
        <MediaQuery minDeviceWidth={1024}>
          <Grid container justify="center" style={{ marginTop: '8vh' }}>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '10vh',
                  marginRight: '10vh',
                }}
              >
                “A place where people can not only work towards a better version of themselves but also build meaningful relationships at the same time”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Aashna S.
              </h4>
            </Grid>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '8vh',
                  marginRight: '8vh',
                }}
              >
                “A safe and judgment free space to work towards your goals and improve yourself with others to join you on the journey and keep you motivated!”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Yasha D.
              </h4>
            </Grid>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '10vh',
                  marginRight: '10vh',
                }}
              >
                “Monk Mode to me is a means for me to do something my tomorrow self will thank me for, and supporting others to do the same”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Akshaya R.
              </h4>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '2vh', paddingBottom: '3vh' }}>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '10vh',
                  marginRight: '10vh',
                }}
              >
                “Monk Mode is about embracing the joy of being. In an effort to chase it all, we lose meaning of what matters most; actively taking part in living a life you love.”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Riya B.
              </h4>
            </Grid>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '10vh',
                  marginRight: '10vh',
                }}
              >
                “A lifestyle that allows you to grow as a person and find inner balance between the mind and body helping you to be the best version of yourself”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Kavisha T.
              </h4>
            </Grid>
            <Grid item xs={4}>
              <p
                style={{
                  fontFamily: 'DMSans',
                  textAlign: 'center',
                  fontSize: '1vw',
                  fontStyle: 'italic',
                  marginLeft: '10vh',
                  marginRight: '10vh',
                }}
              >
                “Once you re-engineer your thinking, you enter an area that the majority could not perceive and make choices few choose to make, which results in achievements few
                can experience”
              </p>
              <h4
                style={{
                  fontFamily: 'DMSans-Bold',
                  textAlign: 'center',
                  fontSize: '1.2vw',
                }}
              >
                Vivek P.
              </h4>
            </Grid>
          </Grid>
        </MediaQuery>
      </div>
    </div>
  );
}

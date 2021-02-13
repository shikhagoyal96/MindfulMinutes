import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import inclimg from '../images/Inclusive.png';
import enthimg from '../images/Enthusiastic.png';
import accountimgl from '../images/AccountableLogo.png';
import Linking from 'react';
import monkmodemacbook from '../images/monkmodelaptop.png';
import medmacbook from '../images/meditationlaptop.png';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
export default function Section() {
  return (
    <div className={'meditation'} id="meditation">
      <div className={'section-content'}>
        <MediaQuery minDeviceWidth={1024}>
          <h3 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '3vw' }}>Take a Step Forward</h3>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <div
                style={{
                  background: '#DDDDDA',
                  borderRadius: '30px',
                  alignItems: 'center',
                  width: '33vw',
                  paddingBottom: '2vh',
                  height: '70vh',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'DMSans-Bold',
                    fontSize: '2vw',
                    textAlign: 'center',
                    paddingTop: '5%',
                  }}
                >
                  Daily Meditation Sessions
                </h4>
                <img
                  style={{
                    marginTop: '-5%',
                    maxWidth: '25vw',
                    maxHeight: '35vh',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                  }}
                  src={medmacbook}
                  className="macbook"
                  alt="macbook"
                />
                <p
                  style={{
                    marginTop: '-5%',
                    fontFamily: 'DMSans-Bold',
                    fontSize: '1.3vw',
                    textAlign: 'center',
                    overflowX: 'hidden',
                    marginLeft: '10vh',
                    marginRight: '10vh',
                  }}
                >
                  We host virtual daily meditation sessions to ensure accountability everyday at 9:00 pm EST.
                </p>
                <a href="/meditation">
                  <div
                    style={{
                      background: '#2C354A',
                      maxWidth: '8vw',
                      borderRadius: '10px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '6vh',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DMSans-Bold',
                        color: 'white',
                        textAlign: 'center',
                        padding: '1vh',
                        fontSize: '1vw',
                      }}
                    >
                      Learn More
                    </p>
                  </div>
                </a>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{
                  background: '#DDDDDA',
                  borderRadius: '30px',
                  alignItems: 'center',
                  maxWidth: '33vw',
                  paddingBottom: '2vh',
                  height: '70vh',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'DMSans-Bold',
                    fontSize: '2vw',
                    textAlign: 'center',
                    paddingTop: '5%',
                  }}
                >
                  MONK MODE
                </h4>
                <img
                  style={{
                    marginTop: '-5%',
                    maxWidth: '25vw',
                    maxHeight: '35vh',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                  }}
                  src={monkmodemacbook}
                  className="macbook"
                  alt="macbook"
                />
                <p
                  style={{
                    marginTop: '-5%',
                    fontFamily: 'DMSans-Bold',
                    fontSize: '1.3vw',
                    textAlign: 'center',
                    overflowX: 'hidden',
                    marginLeft: '10vh',
                    marginRight: '10vh',
                  }}
                >
                  A virtual personal development group of individuals actively working towards the best version of themselves.
                </p>
                <a href="/monkmode">
                  <div
                    style={{
                      background: '#2C354A',
                      maxWidth: '8vw',
                      borderRadius: '10px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'DMSans-Bold',
                        color: 'white',
                        textAlign: 'center',
                        padding: '1vh',
                        fontSize: '1vw',
                      }}
                    >
                      Learn More
                    </p>
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
          <p
            style={{
              fontFamily: 'DMSans-Bold',
              fontSize: '1.3vw',
              textAlign: 'center',
              overflowX: 'hidden',
              marginTop: '6vh',
            }}
          >
            Bringing an innovative change to personal development.
          </p>
          <p
            style={{
              fontFamily: 'DMSans-Bold',
              fontSize: '1.3vw',
              textAlign: 'center',
              overflowX: 'hidden',
              marginTop: '-0.5vh',
            }}
          >
            Stay tuned to follow this journey.
          </p>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023.9}>
          <h3 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '7vw', marginTop: '5vh' }}>Take a Step Forward</h3>
          <div
            style={{
              background: '#DDDDDA',
              borderRadius: '30px',
              alignItems: 'center',
              paddingBottom: '2vh',
              width: '80vw',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '5vh',
            }}
          >
            <h4
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: '1.8em',
                textAlign: 'center',
                paddingTop: '5%',
              }}
            >
              Daily Meditation Sessions
            </h4>
            <img
              style={{
                marginTop: '-5%',
                maxWidth: '50vw',
                maxHeight: '40vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }}
              src={medmacbook}
              className="macbook"
              alt="macbook"
            />
            <p
              style={{
                marginTop: '-5%',
                fontFamily: 'DMSans-Bold',
                fontSize: '3.5vw',
                textAlign: 'center',
                overflowX: 'hidden',
                marginLeft: '2vw',
                marginRight: '2vw',
              }}
            >
              We host virtual daily meditation sessions to ensure accountability everyday at 9:00 pm EST.
            </p>
            <a href="/meditation">
              <div
                style={{
                  background: '#2C354A',
                  maxWidth: '40vw',
                  borderRadius: '10px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '3vh',
                  cursor: 'pointer',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DMSans-Bold',
                    color: 'white',
                    textAlign: 'center',
                    padding: '1vh',
                    fontSize: '4vw',
                  }}
                >
                  Learn More
                </p>
              </div>
            </a>
          </div>
          <div
            style={{
              background: '#DDDDDA',
              borderRadius: '30px',
              alignItems: 'center',
              paddingBottom: '2vh',
              width: '80vw',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '5vh',
            }}
          >
            <h4
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: '1.8em',
                textAlign: 'center',
                paddingTop: '5%',
              }}
            >
              MONK MODE
            </h4>
            <img
              style={{
                marginTop: '-5%',
                maxWidth: '50vw',
                maxHeight: '40vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }}
              src={monkmodemacbook}
              className="macbook"
              alt="macbook"
            />
            <p
              style={{
                marginTop: '-5%',
                fontFamily: 'DMSans-Bold',
                fontSize: '3.5vw',
                textAlign: 'center',
                overflowX: 'hidden',
                marginLeft: '2vw',
                marginRight: '2vw',
              }}
            >
              A virtual personal development group of individuals actively working towards the best version of themselves.
            </p>
            <a href="/monkmode">
              <div
                style={{
                  background: '#2C354A',
                  maxWidth: '40vw',
                  borderRadius: '10px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '3vh',
                  cursor: 'pointer',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DMSans-Bold',
                    color: 'white',
                    textAlign: 'center',
                    padding: '1vh',
                    fontSize: '4vw',
                  }}
                >
                  Learn More
                </p>
              </div>
            </a>
          </div>
          <p
            style={{
              fontFamily: 'DMSans-Bold',
              fontSize: '4vw',
              textAlign: 'center',
              overflowX: 'hidden',
              marginTop: '6vh',
            }}
          >
            Bringing an innovative change to personal development.
          </p>
          <p
            style={{
              fontFamily: 'DMSans-Bold',
              fontSize: '4vw',
              textAlign: 'center',
              overflowX: 'hidden',
              marginBottom: '6vh',
            }}
          >
            Stay tuned to follow this journey.
          </p>
        </MediaQuery>
      </div>
    </div>
  );
}

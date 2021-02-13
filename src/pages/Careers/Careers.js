import React, { Fragment } from 'react';
import './Careers.scss';
import CareerForm from '../../Components/CareersPage/CareerForm';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import downarrow from '../../images/down-arrow-black-circular-button.png';
import { Link } from 'react-scroll';

export const Careers = () => {
  const dev = () => {
    var x = document.getElementById('dev');
    var y = document.getElementById('des');
    var devdiv = document.getElementById('devdiv');
    var desdiv = document.getElementById('desdiv');
    desdiv.style.background = '#424A5B';
    y.style.display = 'none';
    if (x.style.display === 'none') {
      x.style.display = 'block';
      devdiv.style.background = '#292D37';
    } else {
      x.style.display = 'none';
      devdiv.style.background = '#424A5B';
    }
  };

  const des = () => {
    var x = document.getElementById('des');
    var y = document.getElementById('dev');
    var devdiv = document.getElementById('devdiv');
    var desdiv = document.getElementById('desdiv');
    devdiv.style.background = '#424A5B';
    y.style.display = 'none';
    if (x.style.display === 'none') {
      x.style.display = 'block';
      desdiv.style.background = '#292D37';
    } else {
      x.style.display = 'none';
      desdiv.style.background = '#424A5B';
    }
  };

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={1024}>
        <Grid container spacing={0} style={{ height: '90%' }}>
          <Grid item xs={5}>
            <div class="careers">
              <h2 id="join" style={{ color: '#2C354A', fontSize: '2.7vw' }}>
                Join Our Team!
              </h2>
              <p id="desc">We are seeking self-motivated individuals with a desire to make a positive change in the world around them.</p>
              <CareerForm></CareerForm>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div class="careers2">
              <h2 id="weare" style={{ color: 'white' }}>
                We are hiring. Take a step forward.
              </h2>
              <p id="desc2" style={{ color: 'white' }}>
                We are a Mental-Health focused tech-startup, driving innovation within the personal development space, encouraging everyone on this inclusive journey to take a step
                forward. If you are interested in joining a team of individuals who are passionately working towards innovative solutions in the personal development space, make
                sure to apply for your desired position!
              </p>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={3}>
                  <div className="careers3" id="devdiv">
                    <h2 style={{ padding: '2vh', color: '#DDDDDA', textAlign: 'center', fontSize: '1.7em', fontFamily: 'DMSans-Bold' }}>Developer</h2>
                    <p style={{ color: '#DDDDDA', textAlign: 'center', marginTop: '-1em' }}>LEARN MORE</p>
                    <Link to="dev">
                      <img style={{ cursor: 'pointer' }} onClick={() => dev()} class="imgcenter" src={downarrow} alt="" />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="careers3" id="desdiv" style={{ marginLeft: '0' }}>
                    <h2 style={{ padding: '2vh', color: '#DDDDDA', textAlign: 'center', fontSize: '1.7em', fontFamily: 'DMSans-Bold' }}>Designer</h2>
                    <p style={{ color: '#DDDDDA', textAlign: 'center', marginTop: '-1em' }}>LEARN MORE</p>
                    <Link to="des">
                      <img style={{ cursor: 'pointer' }} onClick={() => des()} class="imgcenter" src={downarrow} alt="" />
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <div
                id="dev"
                title="dev"
                style={{
                  padding: '2em',
                  color: 'white',
                  marginLeft: '10%',
                  background: '#424A5B',
                  marginTop: '2em',
                  marginRight: '10%',
                  borderRadius: '20px',
                  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                  maxHeight: '12em',
                  overflowY: 'scroll',
                }}
              >
                <p style={{ fontFamily: 'DMSans-Bold' }}>Technical Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-React/JS | Functional Components & hooks</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Figma</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-GitHub</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-API Integrations</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Agile software Methodology</p>
                <p style={{ fontFamily: 'DMSans-Bold' }}>Personal Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Ability to work both independently and as a member of a team</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Excellent communication, collaboration skills</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Fast learner, problem solver & takes initiative</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Desire or experience working in a startup environment</p>
                <p style={{ fontFamily: 'DMSans-Bold' }}>Bonus Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Python</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-iOS/Android Development</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Java Build tooks (Gradle/Maven)</p>
              </div>
              <div
                id="des"
                style={{
                  padding: '2em',
                  color: 'white',
                  marginLeft: '10%',
                  background: '#424A5B',
                  marginTop: '2em',
                  marginRight: '10%',
                  borderRadius: '20px',
                  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                  maxHeight: '12em',
                  overflowY: 'scroll',
                }}
              >
                <p style={{ fontFamily: 'DMSans-Bold' }}>Technical Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Figma</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Adobe Suite</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-UI/UX knowledge</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Social media marketing</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Graphic & Video Editing</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Understanding of design principles & exemplary creativity</p>
                <p style={{ fontFamily: 'DMSans-Bold' }}>Personal Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Ability to work both independently and as a member of a team</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Excellent communication, collaboration skills</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Fast learner, problem solver & takes initiative</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>- Desire or experience working in a startup environment</p>
                <p style={{ fontFamily: 'DMSans-Bold' }}>Bonus Skills:</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Website & mobile development</p>
                <p style={{ fontFamily: 'DMSans', marginTop: '-1em' }}>-Experience collaborating with Developers </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023.9}>
        <div style={{ background: '#2c354a', height: '100%', paddingTop:'50%' }}>
          <h2 style={{ color:'white', textAlign:'center' }}>Best viewed on a larger screen...</h2>
        </div>
      </MediaQuery>
    </Fragment>
  );
};

export default Careers;

import React from 'react';
import './Meditation.css';
import Grid from '@material-ui/core/Grid';
import macbook from '../../images/meditationlaptop.png';
import inclimg from '../../images/Inclusive.png';
import accimg from '../../images/AccountableLogo.png';
import enthusimg from '../../images/Enthusiastic.png';
import MeditationSignUp from '../../Components/MedSignUpPage/MedSignUpForm';
import MediaQuery from 'react-responsive';
import medipage from '../../images/medipage.png';

export const MeditationPage = () => {
  return (
    <div style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      <MediaQuery minDeviceWidth={1024}>
        <h2
          style={{
            color: '#2C354A',
            fontFamily: 'DMSans-Bold',
            fontSize: '2.75vw',
            textAlign: 'center',
            marginTop: '5vh',
            marginLeft: '2vw',
          }}
        >
          Daily Meditation Sessions
        </h2>
        <img
          style={{
            marginTop: '5vh',
            marginBottom: '12vh',
            width: '70vw',
            height: '25vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
          }}
          src={medipage}
          alt="inclusive"
        />

        <div style={{ background: '#C7C7C7' }}>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={4}>
              <img
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '4vw',
                  height: '4vw',
                  display: 'block',
                }}
                src={inclimg}
                alt="inclusive"
              />
              <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2vw' }}>Inclusive</h2>
              <p
                style={{
                  textAlign: 'center',
                  fontFamily: 'DMSans-Bold',
                  marginLeft: '8vh',
                  marginRight: '8vh',
                  fontSize: '1vw',
                }}
              >
                We are diverse. We come from different geographic & cultural backgrounds. Our ages vary along with our experience.
              </p>
            </Grid>
            <Grid item xs={4}>
              <img
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '4vw',
                  height: '4vw',
                  display: 'block',
                }}
                src={accimg}
                alt="accountable"
              />
              <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2vw' }}>Accountable</h2>
              <p
                style={{
                  textAlign: 'center',
                  fontFamily: 'DMSans-Bold',
                  marginLeft: '8vh',
                  marginRight: '8vh',
                  fontSize: '1vw',
                }}
              >
                We constantly encourage each other and create an environment of growth and accountability. A group that keeps you on track.
              </p>
            </Grid>
            <Grid item xs={4}>
              <img
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '4vw',
                  height: '4vw',
                  display: 'block',
                }}
                src={enthusimg}
                alt="enthusiastic"
              />
              <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2vw' }}>Enthusiastic</h2>
              <p
                style={{
                  textAlign: 'center',
                  fontFamily: 'DMSans-Bold',
                  marginLeft: '8vh',
                  marginRight: '8vh',
                  fontSize: '1vw',
                }}
              >
                We are always excited to meet new people and make new friends. Come out to practice daily meditation with a group full of fun and laughter.
              </p>
            </Grid>
          </Grid>
        </div>
        <Grid style={{ marginTop: '5vh', marginBottom: '5vh' }} container alignItems="center" spacing={3}>
          <Grid item xs={5}>
            <h2
              style={{
                textAlign: 'center',
                borderBottom: '2px solid #C4C4C4',
                marginLeft: '20%',
                marginRight: '20%',
                paddingBottom: '1vh',
                fontSize: '2.5vw',
              }}
            >
              Join Us Today
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontFamily: 'DMSans-Bold',
                fontSize: '1.2vw',
              }}
            >
              Fill out the Form.
            </p>
          </Grid>
          <Grid item xs={6}>
            <MeditationSignUp></MeditationSignUp>
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023.9}>
        <h2
          style={{
            color: '#2C354A',
            fontFamily: 'DMSans-Bold',
            fontSize: '2.75em',
            textAlign: 'center',
            marginTop: '5vh',
            marginLeft: '2vw',
          }}
        >
          Daily Meditation Sessions
        </h2>
        <img
          style={{
            marginTop: '5vh',
            marginBottom: '12vh',
            width: '85vw',
            height: '30vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
          }}
          src={medipage}
          alt="inclusive"
        />

        <div style={{ background: '#C7C7C7' }}>
          <div style={{ alignItems: 'center' }}>
            <img
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '10vw',
                height: '10vw',
                display: 'block',
              }}
              src={inclimg}
              alt="inclusive"
            />
            <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2em' }}>Inclusive</h2>
            <p
              style={{
                textAlign: 'center',
                fontFamily: 'DMSans-Bold',
                marginLeft: '5vh',
                marginRight: '5vh',
                fontSize: '1.4em',
              }}
            >
              We are diverse. We come from different geographic & cultural backgrounds. Our ages vary along with our experience.
            </p>
          </div>

          <div style={{ alignItems: 'center' }}>
            <img
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '10vw',
                height: '10vw',
                display: 'block',
              }}
              src={accimg}
              alt="accountable"
            />
            <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2em' }}>Accountable</h2>
            <p
              style={{
                textAlign: 'center',
                fontFamily: 'DMSans-Bold',
                marginLeft: '5vh',
                marginRight: '5vh',
                fontSize: '1.4em',
              }}
            >
              We constantly encourage each other and create an environment of growth and accountability. A group that keeps you on track.
            </p>
          </div>
          <div style={{ alignItems: 'center', paddingBottom: '5vh' }}>
            <img
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '10vw',
                height: '10vw',
                display: 'block',
              }}
              src={enthusimg}
              alt="enthusiastic"
            />
            <h2 style={{ textAlign: 'center', fontFamily: 'DMSans-Bold', fontSize: '2em' }}>Enthusiastic</h2>
            <p
              style={{
                textAlign: 'center',
                fontFamily: 'DMSans-Bold',
                marginLeft: '5vh',
                marginRight: '5vh',
                fontSize: '1.4em',
              }}
            >
              We are always excited to meet new people and make new friends. Come out to practice daily meditation with a group full of fun and laughter.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '5vh', marginBottom: '5vh' }}>
          <h2
            style={{
              textAlign: 'center',
              borderBottom: '2px solid #C4C4C4',
              marginLeft: '10vw',
              marginRight: '10vw',
              paddingBottom: '1vh',
              fontSize: '2em',
            }}
          >
            Join Us Today
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'DMSans-Bold',
              fontSize: '1.2em',
            }}
          >
            Fill out the Form.
          </p>
          <MeditationSignUp></MeditationSignUp>
        </div>
      </MediaQuery>
    </div>
  );
};

export default MeditationPage;

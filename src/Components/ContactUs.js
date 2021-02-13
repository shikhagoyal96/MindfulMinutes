import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
import ContactUsForm from './ContactUsForm';

export const ContactUs = () => {
  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <MediaQuery minDeviceWidth={1024}>
        <Grid style={{ marginTop: '5vh', marginBottom: '5vh' }} container alignItems="center" spacing={3}>
          <Grid item xs={5}>
            <h2
              style={{
                textAlign: 'center',
                borderBottom: '2px solid #C4C4C4',
                marginLeft: '20%',
                marginRight: '20%',
                paddingBottom: '1vh',
                fontFamily: 'DMSans-Bold',
                fontSize: '2.5vw',
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.2vw',
                fontFamily: 'DMSans-Bold',
              }}
            >
              Fill out the Form.
            </p>
          </Grid>
          <Grid item xs={6}>
            <ContactUsForm></ContactUsForm>
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1023.9}>
      <div style={{ marginTop: '5vh', marginBottom: '5vh' }}>
          <h2
            style={{
              textAlign: 'center',
              borderBottom: '2px solid #C4C4C4',
              marginLeft: '15vw',
              marginRight: '15vw',
              paddingBottom: '1vh',
              fontFamily: 'DMSans-Bold',
              fontSize: '2em',
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2em',
              fontFamily: 'DMSans-Bold',
            }}
          >
            Fill out the Form.
          </p>
          <ContactUsForm></ContactUsForm>
        </div>
      </MediaQuery>
    </div>
  );
};

export default ContactUs;

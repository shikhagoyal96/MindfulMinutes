import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo2.png';
import fb from '../images/fbfooter.svg';
import insta from '../images/igfooter.svg';
import email from '../images/emailfooter.svg';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';

const Footer = () => (
  <div className="footer">
    <Grid container justify="center" spacing={3}>
      <Grid item>
        <a href="https://www.facebook.com/the.mindfulminutes">
          <img className="contacts" src={fb} alt="fb" />
        </a>
      </Grid>
      <Grid item>
        <a href="https://www.instagram.com/the.mindfulminutes/">
          <img className="contacts" src={insta} alt="insta" />
        </a>
      </Grid>
      <Grid item>
        <a href="mailto: mindfulminutes.contact@gmail.com">
          <img
            href="mailto: mindfulminutes.contact@gmail.com"
            className="contacts"
            src={email}
            alt="email"
          />
        </a>
      </Grid>
    </Grid>
  </div>
);

export default Footer;

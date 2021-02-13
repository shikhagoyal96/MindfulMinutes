import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'static',
    marginTop: '1%',
    padding: theme.spacing(3),
  },
  text: {
    fontFamily: 'DMSans-Bold',
    fontSize: '4vw',
  },
}));

const MedSignUpForm = () => {
  const classes = useStyles();

  let history = useHistory();

  const userContext = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [error, setError] = useState(null);

  const SPREADSHEET_ID = '1CVVtwkQy03tKj_6avMRF54K3n8VLZMVUV_AEM7owHJI';
  const SHEET_ID = '0';
  const CLIENT_EMAIL = 'googlesheets@mindful-minutes-4c22c.iam.gserviceaccount.com';
  const PRIVATE_KEY =
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKDP+Xl+oJWls9\ncj1lg841tV6FgGE2p2HBJA4QTrNl5TgzIUuUGCKvg2Ux9gso/+1UTimdw4B2Kj1H\n+kZ+XdP1BNTbZP5vyHrxyrjfWUiKuYUfHBN8qR29czhHTPFxkNI7xRarID82IenG\nHhPVQ6SqvZv+EXJR1IpPtvlhFfHIHa9TH3i5i72NY2MtDnAPAktxEjsKIUsEVtw3\nKJ3rX47aa8+fx/RFcGrMYHlR8ZHXzK0lBBPjFutLik9Rehkt4TR6VXg7kU0amYNm\nYv7UKm90JjJSJ0MSnDB2xkBGTGy2rLzCPTR5dWWfPI2quYX6p/fYYeFjb42hk5er\nx8RvbRXjAgMBAAECggEAJzR7ecI/5r2yG4upryNypUhChXwCIPU8ihoBYpeqxrhB\n/eXVgPBn9o9z2MxpoPR77BJYj+Sp7gPHLUq6V/XD1XSxCrsfhbgsZvNTiP8NjOFv\nm7g6bcNw4lxTjL440TTtHizhd6YDrfDJqCgY6BY+guTUumlPOeKYTdxuqjB0YERN\nioOiUskDjsWqPSdI6IjLX7j6iNXcBTekIGNMXH7b7hM7feSvl38Q4ruux+d9FuPI\n1mofkeL0Ok6NNMVZug/HdRVYiuVsnW9nlF2DyCY4YdDMD/C4IE5pTmfvVX5ZuBzA\nzQkz0GCF4CDtnHQGRe+c5h4dU8u60JpHvsTufoTe0QKBgQD8v3NLpPyBN63Mdy5K\nBCi0qzkL5weuj9REV9+cFAvUVFG9qmQ2wwI7RC1TEHluPBn2px8V6jKtCxvDhH4F\npjGexbC/EZRMdEEaQJnfRHzvuNPk5eBgR9LfCWQKcrIv+oFqKJAn4gA5isyiyXeQ\nQsOzMYfETeJRHxH+PG41qamd0QKBgQDMpo1eTZMfyvrZrlNrWR3Q3Id/AHdbBtn/\nHXjsv2WEIVyFtg2JydfWVYxKaOvYEV5EdsTP/flosX5oyS3AGPal4kj+DG0VXiTa\npxPB2Lv5BbFs51BbOi6tUgUy3mOgcjzMY5VByXzBsVrQprP1f2fMrKtws5JG68qJ\nyCfWjT9hcwKBgQDL7HhM5yAn7dGXb+10IKjrJF8RoGTNThS406GCH5ZvyVxuSCU1\nHeAWC2r6Ywdmjq1wGeT13JDol1beSG8Zhb7xWJXDg56AlSfV05uSzYJ0NE8alvKT\nHEAiXkROPb5RAbAbBAFTfIAr7TYwfZavWX7mfKcLFr/sLcJpuz48o9hLkQKBgAw3\nROkEKGwVabPkvAYEY8s73rquBHHijtCzqaw4II8qjqNMorI+4ithH+axLKLRJpdf\nn4/q0SB2t9z5ZUm6M77jKwg/JaPI4tpKbtt7XH0Y4eZmSF2ps2+VHcpTjA7fwtFQ\ngHBU3qWROKKL0OIuoLuO8wzfKzQgjw56bCZaeBYRAoGBAMr95pMaEK+ST/G3xsHL\nKxr6RKEdQIj+lCuvsCXbLtAXTQ4ZJ6GWDfCYiEKMhKi8wuv2FfAO0FTwxjEKmn6M\nD4Yl3e6d0NR0hI11A4DBN+be7u+P4IWTQMU9Kr8rtOHAjWj7wTKEJeLED5hbvjFh\nslDSrTEEOqZwDTZbChYLe+9C\n-----END PRIVATE KEY-----\n';

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const createUser = (event, name, email, inquiry) => {
    event.preventDefault();
    const db = firebase.firestore();
    const userRef = db.collection('contactus').add({
      name,
      email,
      inquiry,
    });
    const newRow = { Name: name, Email: email, Inquiry: inquiry };
    appendSpreadsheet(newRow);
    userContext.name = name;
    setName('');
    setEmail('');
    setInquiry('');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'inquiry') {
      setInquiry(value);
    }
  };
  const clear = () => {
    setName('');
    setEmail('');
    setInquiry('');
  };

  useEffect(() => {
    if (userContext.user) {
      console.log(userContext.user.displayName);
      setName(userContext.user.displayName);
      setEmail(userContext.user.email);
    }
  }, [userContext.user]);

  return (
    <Container className={classes.container}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={name}
                  label="Name/Organization"
                  name="name"
                  size="small"
                  className={classes.text}
                  variant="outlined"
                  required
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth value={email} label="Email" name="email" size="small" variant="outlined" required onChange={(event) => onChangeHandler(event)} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={inquiry}
                  label="What is your inquiry regarding?"
                  name="inquiry"
                  size="medium"
                  variant="outlined"
                  required
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>

              {/* <Grid item xs={9} style={{ marginTop: '-10px' }}></Grid> */}
              {/* <Grid item xs={3} style={{ marginTop: '-10px' }}>
                <Button
                  size="small"
                  style={{ background: '#2C354A' }}
                  variant="contained"
                  onClick={() => {
                    clear();
                  }}
                >
                  <p
                    style={{
                      color: 'white',
                      marginBottom: '0px',
                      marginTop: '0px',
                    }}
                  >
                    Clear
                  </p>
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={3} style={{ marginTop: '0%' }}>
            <MediaQuery minDeviceWidth={1024}>
              <Button
                size="large"
                style={{ background: '#2C354A' }}
                fullWidth
                type="submit"
                variant="contained"
                onClick={(event) => {
                  createUser(event, name, email, inquiry);
                }}
              >
                <h6
                  style={{
                    color: 'white',
                    paddingTop: '3px',
                    marginBottom: '0px',
                    fontFamily: 'DMSans-Bold',
                    fontSize: '1.1vw',
                  }}
                >
                  Contact
                </h6>
              </Button>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1023.9}>
              <Button
                size="large"
                style={{ background: '#2C354A' }}
                fullWidth
                type="submit"
                variant="contained"
                onClick={(event) => {
                  createUser(event, name, email, inquiry);
                }}
              >
                <h6
                  style={{
                    color: 'white',
                    paddingTop: '3px',
                    marginBottom: '0px',
                    fontFamily: 'DMSans-Bold',
                    fontSize: '2.3vw',
                  }}
                >
                  Contact
                </h6>
              </Button>
            </MediaQuery>
          </Grid>
        </Grid>
      </form>
      {/* <p className="text-center my-3">or</p>
      <Button
        style={{ background: '#2C354A', marginLeft: 'auto', marginRight: 'auto' }}
        variant="contained"
        onClick={signInWithGoogle}
      >
        <h6
          style={{
            color: 'white',
            paddingTop: '1px',
            marginBottom: '0px',
          }}
        >
          Sign Up with Google
        </h6>
      </Button> */}
    </Container>
  );
};

export default MedSignUpForm;

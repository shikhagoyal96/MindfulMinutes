import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import cloudcomp from '../../images/cloud-computing.png';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { app } from '../../firebase';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '4%',
    paddingRight: '15%',
    paddingLeft: '10%',
    padding: theme.spacing(3),
  },
  upload: {
    fontFamily: 'DMSans-Bold',
    color: '#6A6A6A',
    marginTop: '1em',
    fontSize: '1.5vw',
  },
  cloud: {
    background: '#E6E6E6',
    border: '2px solid #9E9E9E',
    boxSizing: 'border-box',
    borderRadius: '13px',
  },
  imgcenter: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const CareerForm = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const SPREADSHEET_ID = '1u34gqXz8miPa9LYK2cq99yu4gctufCYyXGaSzuDHEGc';
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

  let history = useHistory();

  const submitInfo = (event, name, email, position) => {
    event.preventDefault();
    if (uploaded) {
      const db = firebase.firestore();
      const userRef = db.collection('careers').add({
        name,
        email,
        position,
      });
      const newRow = { Name: name, Email: email, Position: position };
    appendSpreadsheet(newRow);
      history.replace('/thankyoucareers');
    }
    else {
      alert('Please upload your resume...')
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'applicantName') {
      setName(value);
    } else if (name === 'applicantEmail') {
      setEmail(value);
    } else if (name === 'applicantPosition') {
      setPosition(value);
    }
  };

  const fileChange = (event) => {
    setUploaded(true);
    const file = event.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('Uploaded file', file.name);
    });
  };

  return (
    <Container className={classes.container}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" name="applicantEmail" variant="outlined" size="small" required onChange={(event) => onChangeHandler(event)} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Name" name="applicantName" size="small" variant="outlined" required onChange={(event) => onChangeHandler(event)} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Position" name="applicantPosition" size="small" variant="outlined" required onChange={(event) => onChangeHandler(event)} />
              </Grid>
              <Grid item xs={8}>
                <h5 className={classes.upload}>Upload your Resume</h5>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={6} style={{ marginTop: '-1em' }}>
                {/* <div className={classes.cloud}>
                  <img src={cloudcomp} class={classes.imgcenter} alt="" />
                  
                </div> */}
                <input type="file" required onChange={fileChange}></input>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button
              style={{ background: '#2C354A' }}
              fullWidth
              type="submit"
              variant="contained"
              onClick={(event) => {
                submitInfo(event, email, name, position);
              }}
            >
              <h6
                style={{
                  color: 'white',
                  paddingTop: '3px',
                  marginBottom: '0px',
                }}
              >
                Submit
              </h6>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CareerForm;

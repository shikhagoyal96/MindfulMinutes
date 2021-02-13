import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '75px',
    padding: theme.spacing(3),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    console.log(email, password);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="userEmail"
                  size="small"
                  variant="outlined"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="userPassword"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ background: '#2C354A' }}
              fullWidth
              type="submit"
              variant="contained"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              <h6
                style={{
                  color: 'white',
                  paddingTop: '3px',
                  marginBottom: '0px',
                }}
              >
                LogIn
              </h6>
            </Button>
          </Grid>
        </Grid>
      </form>
      <p className="text-center my-3">or</p>
        <Button
          style={{ background: '#2C354A' }}
          variant="contained">
            <h6
                style={{
                  color: 'white',
                  paddingTop: '1px',
                  marginBottom: '0px',
                }}
              >
                Sign in with Google
              </h6>
          
        </Button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
    </Container>
  );
};

export default LoginForm;

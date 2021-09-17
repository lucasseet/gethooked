import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import axios from 'axios'
import { Link } from "react-router-dom";
import { toast } from 'material-react-toastify'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://res.cloudinary.com/dafoyfdwb/image/upload/v1631260909/Monty-FISHING-outdoor-0252_m31sjx.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    margin: theme.spacing(0, 0, 5),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    background: "#F13A5D",
    padding: "15px",
  },
}));

export default function Login() {
  const classes = useStyles();

  const notify = (message) => toast.dark(message)

  // use useState hooks
  const [emailLogin, setEmailLogin] = React.useState('')
  const [passwordLogin, setPasswordLogin] = React.useState()
  // Npm Cookies  => [ value, setter ] ==> if we want to use setter, we need to set value
  const [cookie, setCookie] = useCookies(['jwt'])
  let history = useHistory()

  // use api callback
  let fetchData = async (response) => {
    try {
      response = await axios({
        method: 'post',
        url: 'http://localhost:4000/users/login',
        data: {
          email: emailLogin,
          password: passwordLogin,
        },
      })
    } catch (err) {
      return err
    }

    return response
  }


  // submit form function
  const  handleFormSubmission = async (e) => {
    e.preventDefault()

    let response = await fetchData()

    if (!response.data) {
      notify('Email or password is incorrect. Please try again.')
      return
    }

    setCookie('auth_token', response.data.token)
    history.push('/')
    return
  }
    
  


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        
        style={{ marginTop: 0 }}
      >
        <Box m={9}>
          <div className={classes.paper}>
            <img
              src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo-tagline_zdwk20.png"
              width="330"
              style={{ marginBottom: 65 }}
            />
            <Typography
              style={{ fontWeight: "600", color: "#000", fontSize: "28px" }}
              variant="h4"
              align="left"
            >
              Login
            </Typography>

            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                handleFormSubmission(e);
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setEmailLogin(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPasswordLogin(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>

              <Grid item style={{ textAlign: "center" }}>
                New User?
                <Link
                  to="/register"
                  style={{ textDecorationLine: "underline", color: "#F13A5D" }}
                  variant="body2"
                >
                  {" Sign Up!"}
                </Link>
              </Grid>
            </form>
          </div>
        </Box>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}

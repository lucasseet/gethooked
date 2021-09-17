import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { toast } from 'material-react-toastify'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://res.cloudinary.com/dafoyfdwb/image/upload/v1631722758/samantha-deleo-v4oVgg5Vp5k-unsplash_avcxss.jpg)",
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
    margin: theme.spacing(0,0,5),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    background: "#F13A5D",
    padding: "15px",
  },

}));

export default function Register() {
  const classes = useStyles();

  // use useState hooks
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  let [fetchedData, setFetchedData] = React.useState({})



  // let [fetchedData, setFetchedData] = React.useState({})
  let history = useHistory()
  const notify = (message) => toast.dark(message)

   // MAKING POST REQUEST TO REGISTER //

  let fetchData = async () => {
    try {
      fetchedData = await axios({
        method: 'post',
        url: 'http://localhost:4000/users/register',
        data: {
          name: name,
          email: email,
          password: password,
          confirmpassword: confirmPassword,
        },
      })
    } catch (err) {
      console.log(err)
      return err
    }
    
    setFetchedData(fetchedData)
    return
  }

  // submit form function
  const handleFormSubmission = async (e) => {
    e.preventDefault()
    await fetchData()
    if (fetchedData.status !== 201) {
      return notify('Please check your form again.')
    }  notify('Registration successful')

    history.push(`/login`)

    
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} elevation={6} style={{marginTop:0}}>
        <Box m={9}>
        <div className={classes.paper}>
            <img
                src='https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo_wk16mb.png'
                width='310'
                style={{ marginBottom:65}}
                />
          <Typography style={{ fontWeight: "600", color:'#000', fontSize:'26px', marginBottom:"20px" }} variant="h3" align="left">
          Register to GetHooked!
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
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

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
                setEmail(e.target.value);
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              autoComplete="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Register
            </Button>
            
              <Grid item style={{ textAlign:'center' }} >
                Already on GetHooked?
                <Link
                  to="/login"
                  style={{ textDecorationLine: "underline", color: "#F13A5D" }}
                  variant="body2"
                >
                  {" Log In"}
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

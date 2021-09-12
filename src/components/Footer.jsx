import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#28362C',
    left: 0,
    bottom: 0,
    width: '100%'
    
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    
  },

  icons: {
    display: 'flex',
  },
  footer:{
      color: 'white',
      fontSize: '13px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignContent: 'flex-end'
  },
  logo: {
    maxWidth: 120,

  },

  logospace: {
    // justifyContent: 'flex-start'
  },
  
}));



export default function Footer() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
    <Container  className={classes.container}>


    <Grid container  style={{display: 'flex'}}>
        <Grid item className={classes.logospace}> 
        <img
            src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo-white_hjpel2.png"
            alt="logo"
            className={classes.logo}
            style={{ marginRight: 100 }}/>
        
        </Grid>

           
           
       
        <Grid item className={classes.footer}>
            <h4 style={{marginRight:'20px'}}>© 2021 GetHooked Inc.</h4>
            <h4 style={{marginRight:'20px'}}>Terms And Conditions</h4>
            <h4 style={{marginRight:'20px'}}>Privacy Policy</h4>
        </Grid>
    </Grid>


    </Container>
  </div>
);
}

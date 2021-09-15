import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Box, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#28362C',

    
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // padding: 0

    
  },

  icons: {
    display: 'flex',
  },
  footer:{
      color: 'white',
      fontSize: '13px',
      display: 'flex',
      // justifyContent: 'flex-end',
      // alignContent: 'flex-end'
  },
  logo: {
    maxWidth: 120,

  },

  
}));



export default function Footer() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
    <Container  className={classes.container}>

    
    <Grid container  style={{display: 'flex', justifyContent:"space-between"}}>
    <Box>
        <Grid item className={classes.logospace}> 
        <img
            src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo-white_hjpel2.png"
            alt="logo"
            className={classes.logo}
            style={{ marginRight: 100 }}/>
        
        </Grid>
    </Box>
           
           
       <Box style={{alignItems:'center', display:'flex'}} >
        <Grid item className={classes.footer}>
         
           <Typography  style={{marginRight:'20px'}}>
           © 2021 GetHooked Inc.
         </Typography>
         <Typography  style={{marginRight:'20px'}} >
         Terms And Conditions
         </Typography>
         <Typography  style={{marginRight:'20px'}} >
         Privacy Policy
         </Typography>
            
        </Grid>
        </Box>
    </Grid>
    


    </Container>
  </div>
);
}

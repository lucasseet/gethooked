import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import Buttons from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    minHeight: 600,
    maxHeight: 900,
    backgroundImage: `url(${"https://res.cloudinary.com/dafoyfdwb/image/upload/v1631445575/fishbg-27_twfrri.png"})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',


  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth:1300,
    marginLeft:70,
    paddingBottom:90
  },
  
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },

  

 
}));

export default function HomeFeaturedBanner() {
    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
            <Grid item xs={6} className={classes.text}>
            <div>
                <Typography variant="h2" component="h2" style={{fontWeight:'600', marginBottom: '20px', textAlign:'left'}}> Fish smarter, today</Typography>
                <Typography variant="body2" component="p" style={{fontWeight:'400', lineHeight:'1.6', marginBottom: '20px', textAlign:'left'}}> 
                Catch more fish with GetHooked - the world’s most popular fishing app. GetHooked provides you with the tools and skills you need to perform better every time you hit the water, so that you can make bigger and better catches.                </Typography>
                
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                <Buttons color="secondary" variant="contained"children="Explore Fishing Spot"/>
                </div>

                </div>
                
            </Grid>



        </Grid>
      </Container>
    </section>
  );
}


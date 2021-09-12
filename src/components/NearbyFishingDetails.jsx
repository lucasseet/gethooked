import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Buttons from './Button';
import ImageGallery from './ImageGallery';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import FishRatings from './FishRatings';

const useStyles = makeStyles((theme) => ({
  root: {
    },

container:{
    height: 1000, 
    marginLeft:theme.spacing(6),
    marginRight:theme.spacing(6)
},

fishingtext:{
    display:'flex',
    alignItems:'center',
    textAlign: 'left',


}


}));

export default function NearbyFishingDetails() {
    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container >
            <Grid item xs={6} className={classes.fishingtext} style={{marginTop: 150}}>
            <div >
            <Typography variant="h6" component="h2" style={{fontWeight:'600', marginBottom: '10px'}}> Fishing In</Typography>
                <Typography variant="h3" component="h2" style={{fontWeight:'600', marginBottom: '20px'}}> Upper Seletar Reservoir</Typography>
                <Typography variant="p" component="p" style={{fontWeight:'400', lineHeight:'1.6', marginBottom: '20px'}}> 
                Upper Seletar Reservoir is a stream in Riau Islands, Indonesia. Please use your best judgement when determining where you can fish, and make sure you follow local 
                <span style={{
                    textDecoration: 'underline',
                   color: '#F13A5D',
                    fontWeight:'700'
                    }}> rules and regulations</span>.
                     </Typography>
                    <FishRatings/>
                
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                <Buttons color="secondary" variant="contained"children="Join The Community"/>
                <Buttons color="secondary" variant="outlined" children="What's On Your Mind?"/>
                </div>

                </div>

            </Grid>

            <Grid item xs={6} item xs={6} style={{marginTop: 150}}>
                <h1> image gallery here</h1>
                {/* <ImageGallery/> */}
                

            </Grid>

        </Grid>

      </Container>
    </section>
  );
}


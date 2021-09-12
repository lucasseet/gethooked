import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Buttons from './Button';
import MediaCard from './MediaCard';
import Pagination from '@material-ui/lab/Pagination'

import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    minHeight: 500,
    maxHeight: 600,
    backgroundColor:'#F5F6F7',
    paddingTop: theme.spacing(9),
    },

container:{
    maxWidth:1900,
    textAlign:'center'
},

carousel:{
    display:'flex',
    padding: theme.spacing(2),
    justifyContent:'center'

}


}));

export default function HomeFishingSpot() {
    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
        <Grid item xs={12}>
        <Typography variant="h4" component="h2" style={{fontWeight:'600', marginBottom: '20px'}}> Nearby Waters</Typography>
        </Grid>

        <Grid item xs={12} className={classes.carousel}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        
        </Grid>

        <Grid item xs={12}>
        <Pagination count={10} color="primary" style={{display: 'flex',justifyContent:'center'}}/>
        </Grid>


        </Grid>
        

       

      </Container>
    </section>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginRight:20,
    marginBottom: 10,
    boxShadow: 'none'

  },
  media: {
    height: 50,
    backgroundSize:'contain'
  },
  carousel:{
    display:'flex',

}
});

export default function FishCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardActionArea className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/1_ksqsmy.png"
       
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}>
          SeaBass
          </Typography>
        </CardContent>
      </CardActionArea>
      

    </Card>
    

    

    
  );
}
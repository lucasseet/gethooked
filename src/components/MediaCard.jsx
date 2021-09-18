import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: 345,
    marginRight:20,
    marginBottom: 30,
    
  },
  media: {
    height: 200,
    
  },
  carousel:{
    display:'flex',

}
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardActionArea className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
          12 Logged Catches
          </Typography>
        </CardContent>
      </CardActionArea>
      

    </Card>
    

    

    
  );
}
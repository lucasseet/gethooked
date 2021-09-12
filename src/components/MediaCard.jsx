import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight:20,
    marginBottom: 30
  },
  media: {
    height: 200,
  },
  carousel:{
    display:'flex',

}
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardActionArea className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405539/GetHooked-09_sulw5e.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Tuas Explosive Anchorage
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          12 Logged Catches
          </Typography>
        </CardContent>
      </CardActionArea>
      

    </Card>
    

    

    
  );
}
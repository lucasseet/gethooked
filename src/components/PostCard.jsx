import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    borderRadius:10,
    marginBottom:30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard(props) {
  const classes = useStyles();



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.species}
        subheader="September 25, 2021"

        
      />

      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
      <Box mt={2}mb={2} display="flex" style={{width: 1000}}>
      <Link
            to="/nearby-waters" style={{display:'flex'}}>
      <LocationOnIcon style={{ color: '#F13A5D', marginRight:6}}/>
      <Typography variant="body2" color="textSecondary" component="p" 
        style={{fontWieght:"600", 
        marginTop:4, 
        color:'#F13A5D', 
        textDecoration:'underline',
        
        }}>
          {props.location}
        </Typography>
     
      </Link>
      </Box>

      <Typography variant="body2" color="textSecondary" component="p">
      {props.description}
        </Typography>
      </CardContent>

    </Card>
  );
}

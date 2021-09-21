import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudIcon from '@material-ui/icons/Cloud';
// import WavesIcon from '@material-ui/icons/Waves';
// import GrainIcon from '@material-ui/icons/Grain';


const useStyles = makeStyles((theme) => ({
  root: {
    width:"28.33%", //33.33%
    marginBottom: 20,
    height: 160,
    backgroundColor:'#F5F6F7',
    borderRadius: 20,
    marginRight:20,

    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginTop:10,
  },
  pos: {
    marginBottom: 12,
  },
  subtitle:{
      marginBottom:35,
  },

}));

export default function FishSpecCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.subtitle}
        </Typography>

        <div style={{display:'flex'}}>
        <CloudIcon style={{marginRight:'10', marginTop:'2'}}/>
        
        <Typography className={classes.subtitle}  variant="h6" component="h2">
        {props.title}
        </Typography>
        </div>
        
        <Typography  className={classes.footnote}  variant="body2" component="p">
        {props.tagline}
        </Typography>
      </CardContent>

    </Card>

  );
}
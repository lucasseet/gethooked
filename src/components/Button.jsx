import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2),
    fontWeight: '500',
    padding:'0,70px,0, 100px',


    },
  },
}));


export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant={props.variant} color={props.color} children={props.children} stye={{marginRight: 20}}>
        
      </Button>
    </div>
  );
}

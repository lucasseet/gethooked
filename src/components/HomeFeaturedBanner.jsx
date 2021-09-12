import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

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
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },
}));

export default function HomeFeaturedBanner() {
    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <div>
       
        </div>
      </Container>
    </section>
  );
}


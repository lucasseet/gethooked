import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Box } from "@material-ui/core";
import Buttons from "./Button";
import PostCard from "./PostCard"

const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },

  container: {
    margin: "0, auto",
    display: "flex",
    flexDirection: "col",
    justifyContent:"center",
    height:"100vh",
    backgroundColor:"#EAF0F2"
  },

  textinner: {
    display: "flex",
    flexDirection: "column",
    // justifyContent
  },
}));

export default function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item className={classes.textinner}>
        <Box p={16}>
          <Typography
            variant="h4"
            component="h2"
            style={{ fontWeight: "600", marginBottom: "20px", color:"#28362C" }}
          >
            {" "}
            Latest Q&A from The Community
          </Typography>
          <Buttons color="secondary" variant="contained"children="Write A Post"/>
        </Box>
        </Grid>

        <Grid container className={classes.textinner} style={{textAlign:"left"}}>
        <PostCard/>
        </Grid>

        
        
      </Grid>
      
      <Footer />
    </div>
  );
}

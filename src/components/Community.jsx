import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Box } from "@material-ui/core";
import Buttons from "./Button";
import PostCard from "./PostCard"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },

  container: {
    margin: "0, auto",
    display: "flex",
    flexDirection: "col",
    justifyContent:"center",
    
    backgroundColor:"#EAF0F2"
  },

  textinner: {
    display: "flex",
    flexDirection: "column",
    // justifyContent
  },

  postCard: {
    display: "flex",
    justifyContent:"center",
    flexDirection: "column",
    alignItems:"center",
  },
}));

export default function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      
      <Grid container className={classes.container}>
      
      
      <Box p={16} pb={6}>
        <Grid item xs={12}className={classes.textinner}>
        
          <Typography
            variant="h4"
            component="h2"
            style={{ fontWeight: "600", marginBottom: "20px", color:"#28362C" }}
          >
            
            Latest Q&A from The Community
          </Typography>
          <Link
              style={{ textDecoration: 'none'}}
              to={{
                pathname: `/community/create`,
              }}
            >
          <Buttons color="secondary" variant="contained"children="Write A Post"/>
          </Link>
          
          <Box mt={6} className={classes.postCard} style={{textAlign:"left"}}>
          <PostCard />
          <PostCard />
          <PostCard />
          </Box>

        
        </Grid>
        </Box>

        
        
      </Grid>
      <Footer />
     
     
    </div>
  );
}

import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Box } from "@material-ui/core";
import Buttons from "./Button";
import PostCard from "./PostCard"
import { Link } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie'



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
  const [cookies] = useCookies(['auth_token'])


  // use useState hooks
  const [allpost, setAllPost] = React.useState([])

  const getAllPost = async () => {
    const url = 'http://localhost:4000/community'

    await axios
      .get(`${url}`, {
        headers: cookies,
      })
      .then((response) => {
        const allData = response.data
        setAllPost(allData)
      })
      .catch((error) => {
        return error
      })
  }

  React.useEffect(() => {
    getAllPost()
  }, [])


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
          {allpost.map((item => {
            return(
            <PostCard 
            image={item.image} 
            location={item.location}
            description={item.description}
            species={item.species}
            />)
          }))}
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
          </Box>

        
        </Grid>
        </Box>

        
        
      </Grid>
      <Footer />
     
     
    </div>
  );
}

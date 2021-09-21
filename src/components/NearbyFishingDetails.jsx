import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buttons from "./Button";
import ImageGallery from "./ImageGallery";
import Container from "@material-ui/core/Container";
import { Grid, Typography } from "@material-ui/core";
import FishRatings from "./FishRatings";
import FishSpecCard from "./FishSpecCard";
import { Box } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 70,
    display: "flex",
    flexDirection: "row",
  },

  container: {
    // marginLeft:theme.spacing(6),
    // marginRight:theme.spacing(6)
    margin: "0, auto",
    display: "flex",
    flexDirection: "row",
  },

  innercontainer6: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
}));

export default function NearbyFishingDetails(props) {
  const classes = useStyles();
  const { state } = useLocation();

  // use useState hooks
  const [cookies] = useCookies(["auth_token"]);
  const [idFishingSpotData, setIdFishingSpotData] = React.useState([]);
  const [allPost, setAllPost] = React.useState([]);

  let URL1 = "http://localhost:4000/fishing-spots/" + state;
  let URL2 = "http://localhost:4000/fishing-spots";

  const fetchURL = (url) => axios.get(url);

  const promiseArray = [URL1, URL2].map(fetchURL);

  // const getAllFishingSpot = async () => {
  //   const url = 'http://localhost:4000/fishing-spots/' + state

  //   await axios
  //     .get(`${url}`, {
  //       headers: cookies,
  //     })
  //     .then((response) => {
  //       const allData = response.data
  //       console.log(allData)
  //       setIdFishingSpotData(allData)

  //     })
  //     .catch((error) => {
  //       return error
  //     })
  // }

  // console.log(idFishingSpotData.image)

  React.useEffect(() => {
    // getAllFishingSpot()
    Promise.all(promiseArray)
      .then((data) => {
        // console.log(data[0].data); 
        setIdFishingSpotData(data[0].data);

        // console.log(data[1].data);
        console.log(data[1].data)
        console.log(state)


      const postList = data[1].data
       

      const result = postList.filter(function(post) {
        return post.id === state
      });
      console.log(result[0].posts)
  

       
          
       
       setAllPost(result[0].posts)
        

      })
      .catch((err) => {});
  }, []);

  console.log(allPost)

  let fishCountArray = idFishingSpotData.fishCount;

  console.log(fishCountArray);

  return (
    <section className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.innercontainer6}>
          <Box pt={16} pl={12} pr={10} pb={4}>
            <div>
              <Typography
                variant="h6"
                component="h2"
                style={{ fontWeight: "600", marginBottom: "10px" }}
              >
                {" "}
                Fishing In
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontWeight: "600", marginBottom: "20px" }}
              >
                {" "}
                {/* {props.state.fishingspotid} */}
                {idFishingSpotData.location}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontWeight: "400",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {idFishingSpotData.description}
                Please use your best judgement when determining where you can
                fish, and make sure you follow local
                <a href="https://www.pub.gov.sg/getinvolved/activities/fishing">
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "#F13A5D",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    rules and regulations
                  </span>
                </a>
                .
              </Typography>
              <FishRatings fishCountArray={fishCountArray} />

              {/* Weather */}
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                <FishSpecCard />
                <FishSpecCard />
                <FishSpecCard />
                <FishSpecCard />
                <FishSpecCard />
                <FishSpecCard />
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6} className={classes.innercontainer6}>
          <Box pt={17} pr={12} pl={6} pb={4}>
            <ImageGallery post={allPost} />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

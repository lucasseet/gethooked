import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Buttons from './Button';
import MediaCard from './MediaCard';
import Pagination from '@material-ui/lab/Pagination'
import { useCookies } from 'react-cookie'
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios'
import _ from 'lodash'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    minHeight: 500,
    maxHeight: 600,
    backgroundColor:'#F5F6F7',
    paddingTop: theme.spacing(9),
    },

container:{
    maxWidth:1900,
    textAlign:'center'
},

carousel:{
    display:'flex',
    padding: theme.spacing(2),
    justifyContent:'center'

}


}));

export default function HomeFishingSpot() {
    const classes = useStyles();

    // use useState hooks
    const [cookies] = useCookies(['auth_token'])
    const [allFishingSpotData, setAllFishingSpotData] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(0)
    const [allFishingSpotTotalPages, setAllFishingSpotTotalPages] = React.useState([])
    const [nearbyWaters, setNearbyWaters] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)


    const getAllFishingSpot = async () => {
      const url = 'http://localhost:4000/fishing-spots/'
  
      await axios
        .get(`${url}`, {
          headers: cookies,
        })
        .then((response) => {
          const allData = response.data
          setAllFishingSpotData(allData)
          // console.log(allData)
        })
        .catch((error) => {
          return error
        })
    }

    const getAllFishingSpotPage = async () => {
      const url = 'http://localhost:4000/fishing-spots/p'
  
      await axios
        .get(`${url}`, {
          headers: cookies,
          params: {page}

        })
        .then((response) => {
          const allData = response.data
          // console.log(allData)
          setNearbyWaters(allData.items)
          setTotalPages(allData.meta.totalPages)
          
        })
        .catch((error) => {
          return error
        })
    }

    //  To handle page change to show array of items
    const handlePageChange = (e, pageNo) => {
      // console.log(pageNo)
      setPage(pageNo)
    }

    React.useEffect(() => {
      getAllFishingSpot()
      handlePageChange()

    }, [])

    React.useEffect(() => {
      if(page)
      // console.log(page)
      getAllFishingSpotPage()

    }, [page])
    

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
        <Grid item xs={12}>
        <Typography variant="h4" component="h2" style={{fontWeight:'600', marginBottom: '20px'}}> Nearby Waters</Typography>
        </Grid>

        <Grid item xs={12} className={classes.carousel}>
          {nearbyWaters.map((item, pos)=>{
            return(
              <Link
              key={pos}
              style={{ textDecoration: 'none'}}
              to={{
                pathname: `/nearby-waters/${item.id}`,
                state: item.id
              }}
            >
              <MediaCard 
              key={pos}
              location={item.location}
              image={item.image}
              id={item.id}
              description={item.description}
            />
            </Link>

            
            )

          })
    }
        
        </Grid>

        <Grid item xs={12}>
        <Pagination 
        count={totalPages}
        defaultPage
        color="primary" 
        onChange={(e, pageNo) => {
          handlePageChange(e, pageNo)
        }}
        style={{display: 'flex',justifyContent:'center'}}/>
        </Grid>


        </Grid>
        

       

      </Container>
    </section>
  );
}


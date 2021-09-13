import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Buttons from './Button';
import ImageGallery from './ImageGallery';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import FishCard from './FishCard'

const useStyles = makeStyles((theme) => ({
  root: {
    },

container:{
    height: 1000, 
    marginLeft:theme.spacing(6),
    marginRight:theme.spacing(6)
},

fishingtext:{
    display:'flex',
    alignItems:'center',
    textAlign: 'left',


}


}));

const itemData = [
    {
       img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/1_ksqsmy.png',
    },
    {
        img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/1_ksqsmy.png',
     },
     {
        img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/1_ksqsmy.png',
     },
]


export default function FishRatings() {


    return (


          <Grid container >
              <Grid item xs={12} >
                  <div style={{display:'flex'}}>
                  <GradeRoundedIcon style={{color:'#F13A5D', fontSize: 30, marginRight:8}}/>
                  <Typography variant="h6" style={{fontWeight:'600', marginBottom: '8px', paddingTop:2}}> 4 Ratings</Typography>
                    </div>
                    <Typography variant="body2" style={{ marginBottom: '20px'}}> 5 Logged Catches</Typography>
                    <Typography variant="h6" style={{ fontWeight:'600', marginBottom:'20px'}}> 3 Most caught species</Typography>

                    <div style={{display:'flex'}}>
                    <FishCard/>
                    <FishCard/>
                    <FishCard/>
                    </div>


            
  
              </Grid>
  
             
  
          </Grid>
  


    )
  }
  


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    
  },
  imageList: {
    width: '100%',
    transform: 'translateZ(0)',
  },

  imageListCarousel: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    borderRadius:"20px"
  },

  featuredImage:{
    display: "block",
    marginBottom: 30,
    
      },
  imageText:{
    display: "block",
    textAlign:"left",
    marginBottom: 15,
    
  },


}));

const itemData = [
  {
     img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/10_sczxca.png',
     title: 'Image',
     author: 'author',
     featured: true
  },
  {
      img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405539/GetHooked-09_sulw5e.png',
      title: 'Image',
      author: 'author',
   },
   {
      img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405539/GetHooked-09_sulw5e.png',
      title: 'Image',
      author: 'author',
   },
   {
      img: 'https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405539/GetHooked-09_sulw5e.png',
      title: 'Image',
      author: 'author',
   },

]


export default function AdvancedImageList(props) {
  const classes = useStyles();
  // console.log(props.post[0].image)

  return (
    <div className={classes.root}>

      
        
          <div className={classes.featuredImage}>
            <img src={
              Array.isArray(props.post) && props.post[0] && props.post[0].image
              ?(props.post[0].image)
              : ("https://res.cloudinary.com/dafoyfdwb/image/upload/v1631801954/1-1200x800_nmbvm6.jpg")
            
            }
            width="100%"
            style={{borderRadius:"30px"}}
            />
          </div>

          <Typography  variant="h6" component="p" className={classes.imageText}>
          Recently Logged Catches
        </Typography>


        <ImageList className={classes.imageListCarousel} cols={4} gap={9}>
        {props.post.map((item) => (
          item.image === undefined
          ? (<h6>There are no items at the moment.</h6>)
          : (<ImageListItem key={item.image}>
            <img src={item.image} alt={item.title} />
           
          </ImageListItem>)
          
        ))}
      </ImageList>
     

    </div>
  );
}



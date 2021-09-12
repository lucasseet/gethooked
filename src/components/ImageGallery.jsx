import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      width: '100vh',
      maxWidth: 1900
    },
    imageList: {
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //   transform: 'translateZ(0)',
     
    },


  }));

  const itemData = [
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


export default function ImageGallery() {
    const classes = useStyles();

  return (
<div className={classes.root}>
      <ImageList className={classes.imageList} cols={4}  style={{display:'flex', justifyContent:'flex-end'}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>

  );
}




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
    flexWrap: 'nowrap',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 1000,
    height: 800,
    transform: 'translateZ(0)',
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


export default function AdvancedImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={100} gap={6} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 6 : 1.5}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}



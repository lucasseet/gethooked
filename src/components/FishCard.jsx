import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const fishData = {
  channelCatfish:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/3_sxbyml.png",
  whiteBass:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/7_ohvmlj.png",

  rockBass:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/9_b065zo.png",

  smallMouthBass:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/6_k2mqpe.png",

  commonCarp:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/2_rfm7ce.png",

  northernPike:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/4_ksyxq1.png",
  longearSunfish:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/5_klzi8z.png",
  whiteCrappie:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/3_sxbyml.png",
  buffalo:
    "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/8_sw9f6h.png",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginRight: 20,
    marginBottom: 10,
    boxShadow: "none",
  },
  media: {
    height: 50,
    backgroundSize: "contain",
  },
  carousel: {
    display: "flex",
  },
});

export default function FishCard(props) {
  const classes = useStyles();

  function SwitchCase(x) {
    switch (x) {
      case "channelCatfish":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/3_sxbyml.png";

      case "northernPike":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/4_ksyxq1.png";

      case "rockBass":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/9_b065zo.png";

      case "smallMouthBass":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/6_k2mqpe.png";

      case "commonCarp":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/2_rfm7ce.png";

      case "northernPike":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/4_ksyxq1.png";

      case "longearSunfish":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/5_klzi8z.png";
      case "whiteCrappie":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405538/3_sxbyml.png";
      case "buffalo":
        return "https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405537/8_sw9f6h.png";
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.root}>
        <CardMedia className={classes.media} image={SwitchCase(props.fish)} />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: "center" }}
          >
            {props.fish}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

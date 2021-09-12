import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import RoomIcon from "@material-ui/icons/Room";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from '@material-ui/icons/Group';
import Buttons from './Button'

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,

  root: {
    background: "#F5F6F7",
    display: 'flex',
    
  },
  logo: {
    maxWidth: 110,
  },
  space: {
    marginLeft: "25px",
    marginRight: "50px",
    display: 'flex',
  },

  fontWeight: {
    fontWeight: "700",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (

      <AppBar position="static" className={classes.root}>
      
        <Toolbar className={classes.space}>
          
          <img
            src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo_wk16mb.png"
            alt="logo"
            className={classes.logo}
            style={{ marginRight: 100 }}
          />

          <Link
            to="/community"
            style={{ textDecoration: "none", color: "#28362C" }}
          >
            <ListItem button>
              <ListItemIcon style={{ color: "#28362C", minWidth: 35 }}>
                <GroupIcon style={{fontSize:27}} />
              </ListItemIcon>
              <ListItemText
                primary="Community"
                style={{ fontSize: 70 }}
              />
            </ListItem>
          </Link>

          <Link
            to="/fishing-spots"
            style={{ textDecoration: "none", color: "#28362C" }}
          >
            <ListItem button>
              <ListItemIcon style={{ color: "#28362C", minWidth: 35 }}>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText
                primary="Find Fishing spot"
                style={{ fontSize: 70 }}
              />
            </ListItem>
          </Link>
          
        <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-end'}}>
          <Buttons color="secondary" variant="outlined"children="Login"/>
          <Buttons color="secondary" variant="contained" children="Sign Up"></Buttons>
        </div>
        
        </Toolbar>

      </AppBar>
  );
}

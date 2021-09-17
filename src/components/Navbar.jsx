import { AppBar, Toolbar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import RoomIcon from "@material-ui/icons/Room";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from '@material-ui/icons/Group';
import Buttons from './Button'
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  

  root: {
    background: "#F5F6F7",
    display: 'flex',
    position: 'fixed',
    
    
  },
  logo: {
    maxWidth: 160,
  },
  space: {
    marginLeft: "25px",
    marginRight: "50px",
    display: 'flex',
    justifyContent:"space-between",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
        <Box display="flex">
          <img
            src="https://res.cloudinary.com/dafoyfdwb/image/upload/v1630405540/logo_wk16mb.png"
            alt="logo"
            className={classes.logo}
            style={{ marginRight: 40 }}
          />
          
          <Link
            to="/community"
            style={{ textDecoration: "none", color: "#28362C", display:"flex" }}
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
            style={{ textDecoration: "none", color: "#28362C", display:"flex" }}
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
          </Box>

          <Box display="flex">
        <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-end'}}>
          <Buttons color="secondary" variant="outlined"children="Login"/>
          <Buttons color="secondary" variant="contained" children="Sign Up"></Buttons>
        </div>
        </Box>
        
        </Toolbar>

      </AppBar>
  );
}

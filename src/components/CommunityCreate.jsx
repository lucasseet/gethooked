import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from 'react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Buttons from "./Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { toast } from 'material-react-toastify'

const useStyles = makeStyles((theme) => ({


  container: {
    margin: "0, auto",
    display: "flex",
    flexDirection: "col",
    justifyContent: "center",
    height: "100vh",

    backgroundColor: "#EAF0F2",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },

  textinner: {
    display: "flex",
    flexDirection: "column",
    // justifyContent
  },

  postCard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function CommunityCreate() {
  const classes = useStyles();

  // use useState hooks
  const [location, setLocation] = React.useState('')
  const [fish, setFish] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [cookies] = useCookies(['auth_token'])
  let history = useHistory()

  //image upload
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();





  const notify = (message) => toast.dark(message)


  // Create TO DO //
  let createPost = async () => {
    try {
      await axios.post(
        'http://localhost:4000/community/create',
        {
          image:'https://res.cloudinary.com/dafoyfdwb/image/upload/v1631801954/1-1200x800_nmbvm6.jpg',
          location: location,
          fish: fish,
          description: description,
        },
        {
          headers: cookies,
        }
      )
      console.log('1')
      history.push('/community')
      console.log('5')
      return
    } catch (err) {
      console.log('2')
      return notify('Please check your form again.')
    }
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
};

const previewFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
      setPreviewSource(reader.result);
  };
};

const handleSubmitFile = (e) => {
  e.preventDefault();
  if (!selectedFile) return;
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);
  reader.onloadend = () => {
      uploadImage(reader.result);
  };
  reader.onerror = () => {
      console.error('AHHHHHHHH!!');
      setErrMsg('something went wrong!');
  };
};



  useEffect(() => {
    createPost
  }, [])


  // submit form function
  const handleFormSummit = (e) => {
    e.preventDefault()
    
    history.push('/community')
  }

  return (
    <div className={classes.root}>
      <Navbar />

      <Grid container className={classes.container}>
        <Box p={16} pb={6} pl={0} pr={0}>
          <Grid item xs={12} className={classes.textinner}>
            <Typography
              variant="h4"
              component="h2"
              style={{
                fontWeight: "600",
                marginBottom: "00px",
                color: "#28362C",
              }}
            >
              Write A Post
            </Typography>

            <Box
              mt={6}
              className={classes.postCard}
              style={{ textAlign: "left" }}
            >

              {/* Start of upload image */}
              <form
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 500,
                }}
                onSubmit={handleSubmitFile} 
                
              >
                <Box mb={2} style={{ textAlign: "left" }}>
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{
                      fontWeight: "400",
                      
                      color: "#28362C",
                    }}
                  >
                    Upload your catch!
                  </Typography>
                  {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '100px', display:'flex', justifyContent:'center' }}
                />
            )}
                </Box>

                <Box mb={2}>
                  <div className="form-group">
                    <input 
                      type="file" 
                      style={{ marginLeft: 60 }}
                      onChange={handleFileInputChange}
                      value={fileInputState}
                      
                      />
                  </div>
                  
                </Box>

                <Box mb={2} style={{ textAlign: "left" }}>
                  <div className="form-group">
                    <Buttons
                      color="secondary"
                      variant="outlined"
                      children="Upload"
                      type="submit"
                    ></Buttons>
                  </div>

              
                </Box>
              </form>


              {/* Start of form */}

              <form
                style={{ marginBottom: 20, width: 500 }}
                onSubmit={(e) => {
                  handleFormSummit(e);
                }}
              >
                <FormControl
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="normal"
                  fullWidth
                  textalign="left"
                >
                  <InputLabel>
                    Location
                  </InputLabel>
                  <Select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <MenuItem value="8">Lower pierce reservoir</MenuItem>
                    <MenuItem value="9">Marina reservoir</MenuItem>
                    <MenuItem value="10">Changi Beach Park</MenuItem>
                    <MenuItem value="11">Jurong Lake</MenuItem>
                    <MenuItem value="12">Bedok Reservoir</MenuItem>
                    <MenuItem value="13">Pasir Ris Town Park Fishing Pond</MenuItem>
                    <MenuItem value="14">Serangoon Reservoir</MenuItem>
                    <MenuItem value="15">Punggol Point Jetty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="normal"
                  textalign="left"
                >
                  <InputLabel>
                    Select A Fish
                  </InputLabel>
                  <Select
                    value={fish}
                    onChange={(e) => setFish(e.target.value)}
                  >
                    <MenuItem value="channelCatfish">Channel Catfish</MenuItem>
                    <MenuItem value="whiteBass">White Bass</MenuItem>
                    <MenuItem value="rockBass">Rock Bass</MenuItem>
                    <MenuItem value="smallmouthBass">Small Mouth Bass</MenuItem>
                    <MenuItem value="commonCarp">Common Carp</MenuItem>
                    <MenuItem value="northernPike">Northern Pike</MenuItem>
                    <MenuItem value="longearSunfish">Longear Sunfish</MenuItem>
                    <MenuItem value="whiteCrappie">White Crappie</MenuItem>
                    <MenuItem value="buffalo">Buffalo</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Whats on your mind?"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={9}
                  multiline
                  fullWidth
                  row="9"          
                  style={{marginTop:18,marginBottom:1}}
                />
              <div style={{display:'flex', justifyContent:'center', marginBottom: 20, marginTop: 20 }}>
              <Buttons
                type="submit"
                color="secondary"
                variant="contained"
                children="Write A Post"
                onClick={createPost}
                // style={{ marginBottom: 20, marginTop: 20 }}
              />
              </div>
              </form>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </div>
  );
}

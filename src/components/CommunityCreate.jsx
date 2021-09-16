import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Buttons from "./Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: "100vh",
  //   },

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
              <form
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 500,
                }}
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
                </Box>

                <Box mb={2}>
                  <div className="form-group">
                    <input type="file" style={{ marginLeft: 60 }} />
                  </div>
                </Box>

                <Box mb={2} style={{ textAlign: "left" }}>
                  <div className="form-group">
                    <Buttons
                      color="secondary"
                      variant="outlined"
                      children="Upload"
                    ></Buttons>
                  </div>
                </Box>
              </form>

              <form
                className={classes.form}
                noValidate
                style={{ marginBottom: 20, width: 500 }}
                onSubmit={(e) => {
                  handleFormSubmission(e);
                }}
              >
                <FormControl
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="normal"
                  fullWidth
                  textalign="left"
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="teamSelection"
                    value=""
                    onChange={(e) => setMainUserRole(e.target.value)}
                  >
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  variant="outlined"
                  style={{ width: "100%" }}
                  margin="normal"
                  textalign="left"
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select A Fish
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="teamSelection"
                    value=""
                    onChange={(e) => setMainUserRole(e.target.value)}
                  >
                    <MenuItem value="bride">Bride</MenuItem>
                    <MenuItem value="groom">Groom</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="status"
                  label="Whats on your mind?"
                  variant="outlined"
                  value={""}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={9}
                  multiline
                  fullWidth
                  row="9"

                  style={{marginTop:18,marginBottom:1}}
                />
              </form>
              <Buttons
                color="secondary"
                variant="contained"
                children="Write A Post"
                style={{ marginBottom: 20, marginTop: 20 }}
              />
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </div>
  );
}

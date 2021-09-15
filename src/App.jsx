import React from 'react'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "typeface-poppins"

//PAGES//
import Home from './components/Home'
import Nearby from './components/Nearby';
import Login from './components/Login';
import Register from './components/Register';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    

  },

  palette: {
    primary: {
      main: '#28362C',
    },
    secondary: {
      main: '#F13A5D',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  
  
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
    <Switch>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/nearby-waters' component={Nearby} />
    <Route path='/' component={Home} />
    


    </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

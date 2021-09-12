import React from 'react'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//PAGES//
import Home from './components/Home'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
    },
    body1:{
      fontWeight:700,
      fontSize: 15
    }
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
    <Route path='/' component={Home} />


    </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

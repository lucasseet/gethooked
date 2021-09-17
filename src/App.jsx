import React from 'react'
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'
import "typeface-poppins"
import { CookiesProvider } from 'react-cookie'
import { ToastContainer } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'


//PAGES//
import Home from './components/Home'
import Nearby from './components/Nearby';
import Login from './components/Login';
import Register from './components/Register';
import Community from './components/Community';
import CommunityCreate from './components/CommunityCreate';

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
    <CookiesProvider>
      <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
    
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
    <Switch>
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/community/create' component={CommunityCreate} />
    <Route path='/community' component={Community} />
    <Route path='/nearby-waters' component={Nearby} />
    <Route path='/' component={Home} />
    


    </Switch>
    </div>
    </Router>
    </ThemeProvider>
    </CookiesProvider>

  );
}

export default withCookies(App);

import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { Outlet } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

let SERVER = process.env.REACT_APP_SERVER;

// import { withAuth0 } from "@auth0/auth0-react";
let AUTHSERVER = process.env.REACT_APP_DOMAIN;
let yourClientId = process.env.REACT_APP_CLIENTID;

class App extends React.Component {


  render() {
    return (
      <Auth0Provider
        domain={AUTHSERVER}
        clientId={yourClientId}
        SERVER={SERVER}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <>

          <Header />
          <Outlet />
          <Footer />

        </>
      </Auth0Provider>
    );
  }
}


export default App;

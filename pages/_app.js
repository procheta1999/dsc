import React, { createContext, useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'
import App from 'next/app'

import firebaseConfig from "../src/config/firebaseConfig";

import { UserContext } from "../src/contexts/UserContext";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



function MyApp({ Component, pageProps }) {
  const [ user, setUser ] = useState({});
  return(
    <>
    <ToastContainer/>
     <UserContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
     </UserContext.Provider>
    </>
  )
}


MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp

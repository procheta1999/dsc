import React, { useContext } from "react";
import ScrollableTabsButtonAuto from '../src/components/Feed/feed'
import {useRouter} from "next/router";
import { FirebaseContext } from "../src/firebase";

function HomePage (props) {
  const router = useRouter()
  const { user, firebase } = useContext(FirebaseContext); 
  
    
    
    return (
        <>
        <ScrollableTabsButtonAuto />

          
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
   </>
    );
}


export default HomePage;
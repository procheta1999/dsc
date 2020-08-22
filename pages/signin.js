import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { SignUpLink } from "./signup";
import Head from "next/head";
import Link from "next/link";
import { IndexLink } from "./index";
import useFormValidation from '../src/components/Auth/useFormValidation'
import validateLogin from "../src/components/Auth/validateLogin";
import firebase from "../src/firebase";
import {PasswordForgetLink} from "./ForgotPassword";

const INITIAL_STATE = {
  email: "",
  password: ""
};


const SignIn = () => {
  const router = useRouter();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [firebaseError, setFirebaseError] = React.useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      await firebase.login(email, password)
      router.push("/home");
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Log In</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico"
        ></link>
      </Head>
      <main>
        <h1 className="title">
          <img
            src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true"
            alt="dsc Logo"
            className="logo"
          ></img>
          <b>
            DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i>
          </b>
        </h1>
        <br></br>
        <center>
          <h1>Log In To Start Your Journey Today!</h1>
        </center>
        <center>
          <img src="https://media.giphy.com/media/1O2BRZcDgIfDsKMTbG/giphy.gif"></img>
        </center>
        <center>
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="card">
                Email:
                <input
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  placeholder="someone@example.com"
                  name="email"
                  onBlur={handleBlur}
                />
                
        {errors.email && <p className="error-text">{errors.email}</p>}
                <br></br>
                <br></br>
                Password:
                <input
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onBlur={handleBlur}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                {firebaseError && <p className="error-text">{firebaseError}</p>}
                <br></br>
                <center>
                  <button type="submit" disabled={isSubmitting} >Sign In</button>
                </center>
                <br></br>
                <br></br>
                <center>
                  <SignUpLink />
                </center>
                <br></br>
                <center>
                  <PasswordForgetLink/>
                </center>
                <br/><br/>
                <center>
                  <button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "20px", width: "200px" }}
                  >
                    <IndexLink />
                  </button>
                </center>
              </div>
            </div>
          </form>
        </center>
      </main>
      <footer>
        <a
          href="https://dscnsec.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true"
            alt="DSC Logo"
            className="logo"
          />
        </a>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 4rem;
        }

        .card {
          margin: 2rem;
          flex-basis: 45%;
          padding: 3rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 20px;
          -moz-box-shadow: inset 0 0 10px #000000;
          -webkit-box-shadow: inset 0 0 10px #000000;
          box-shadow: inset 0 0 10px #000000;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        #l {
          text-align: center;
        }
        .logo {
          height: 1em;
          float: left;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          padding: 5rem 0;
        }
        #s {
          animation: pulse 5s infinite;
        }
        @keyframes pulse {
          20% {
            color: red;
          }
          30% {
            color: blue;
          }
          40% {
            color: green;
          }
          100% {
            color: yellow;
          }
        }
        #pro {
          color: blue;
        }
        form {
          font-size: 30px;
          padding: 0.0001rem 5em 5em 5em;
          margin: 100px 100px 100px 100px;
        }
        Button {
          align-items: center;
        }
        #new {
          text-align: center;
        }
      `}</style>
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
};

export const SignInLink = () => (
  <p>
    Already have an account?{" "}
    <Link href="/signin">
      <a>Sign In</a>
    </Link>
  </p>
);

export default SignIn;

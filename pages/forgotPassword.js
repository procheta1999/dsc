import React from "react";
import Link from "next/link"
import FirebaseContext from "../src/firebase/context";
import { IndexLink } from "./index";

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext);
  const [resetPasswordEmail, setResetPasswordEmail] = React.useState("");
  const [isPasswordReset, setIsPasswordReset] = React.useState(false);
  const [passwordResetError, setPasswordResetError] = React.useState(null);

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
      setIsPasswordReset(true);
      setPasswordResetError(null);
    } catch (err) {
      console.error("Error sending email", err);
      setPasswordResetError(err.message);
      setIsPasswordReset(false);
    }
  }

  return (
    <>
      <center>
      <div className="grid">
      <div className="card">
        Your Email Address:
        <input
          onChange={event => setResetPasswordEmail(event.target.value)}
          type="text"
          placeholder="Email Address"
        /><br></br>
        <br></br>
        <center><button  type="submit" onClick={handleResetPassword}>
          Reset My Password
        </button></center>
        {isPasswordReset && <p>Check email to reset password</p>}
        {passwordResetError && <p className="error-text">{passwordResetError}</p>}
        <br></br>
        <center><button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "200px" }}
          >
            <IndexLink/>
          </button></center>
        </div>
        </div>
      </center>
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
         -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
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
      #l{
          text-align:center;
      }
      .logo {
        height: 1em;
        float:left;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 5rem 0;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #pro{
        color:blue;
      }
      form{
        font-size:30px;
    padding:0.00010rem 5em 5em 5em;         
    margin: 100px 100px 100px 100px;
      }
      Button{
        align-items:center;
      }
      #new{
        text-align:center;
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
  
}

const PasswordForgetLink = () => (
  <p>
    <Link href="forgotPassword">
      <a>Forgot Password? </a>
    </Link>
  </p>
);

export default ForgotPassword;

export { PasswordForgetLink };

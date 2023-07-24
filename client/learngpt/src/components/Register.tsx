import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../styles/LoginPageStyle.css";

function Register() {
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = async (e: any) => {
    e.preventDefault();
    if (password !== secondPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registration successful");
      // Insert mongo stuff below
      /* 
      // Create a Firestore reference
      const db = getFirestore();
      const docRef = doc(db, "users", userCredential.user.uid);

      // Set the data
      await setDoc(docRef, {
        username: username,
        phoneNumber: phoneNumber,
        email: email,
        starredJobs: [],
      });
      */
      console.log("Document written with ID: ", userCredential.user.uid);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error happened:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleRegistration}>
        <p>Register</p>
        <div className="group">
          <input
            className="main-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Email</label>
        </div>
        <div className="container-1">
          <div className="group">
            <input
              className="main-input"
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="highlight-span"></span>
            <label className="lebal-email">Password</label>
          </div>
        </div>
        <div className="group">
          <input
            className="main-input"
            type="text"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Re-enter Password</label>
        </div>
        <div className="group">
          <input
            className="main-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Username</label>
        </div>
        <div className="group">
          <input
            className="main-input"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Phone Number</label>
        </div>
        <button className="submit">Submit</button>
        <p className="registerText">
          <Link to="/">
            <u>Dont have an account? Login here.</u>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;

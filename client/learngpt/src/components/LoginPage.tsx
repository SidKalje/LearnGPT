import { useContext, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../styles/LoginPageStyle.css";
import {
  isLoggedIn,
  UserUID,
  UserEmail,
  UserDisplayName,
} from "../AuthContext";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { loggedIn, setLoggedIn } = useContext(isLoggedIn); // [1]
  const { userUID, setUserUID } = useContext(UserUID); // [1]
  const { userEmail, setUserEmail } = useContext(UserEmail); // [1]
  const { userDisplayName, setUserDisplayName } = useContext(UserDisplayName); // [1]
  const navigate = useNavigate();

  const test = () => {};
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("error didn't happen");
      setLoggedIn(true);
      setUserUID(user?.uid);
      setUserEmail(user?.email);

      // const db = getFirestore();

      // if (user) {
      //   const docRef = doc(db, "users", user.uid);
      //   const docSnap = await getDoc(docRef);

      //   if (docSnap.exists()) {
      //     console.log("Document data:", docSnap.data());
      //     setUserDisplayName(docSnap.data().username);
      //     // do something with displayName
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      // }

      console.log(userDisplayName);
      navigate("/homepage");
    } catch (error: any) {
      const errorMessage = error.message;
      console.log("Error happened:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <p>Login</p>
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
        <button className="submit">Submit</button>
        <p className="registerText">
          <Link to="/signup">
            <u>Dont have an account? Register here.</u>
          </Link>
        </p>
      </form>
    </>
  );
}

export default LoginPage;

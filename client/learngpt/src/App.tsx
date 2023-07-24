import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.tsx";
import LoginPage from "./components/LoginPage.tsx";
import Register from "./components/Register.tsx";

import { isLoggedIn, UserUID, UserEmail, UserDisplayName } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenCoursePage from "./components/GenCoursePage.tsx";

function App() {
  // useEffect(() => {
  //   fetch("/api").then(() => {});
  // }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userDisplayName, setUserDisplayName] = useState({});
  return (
    <>
      <isLoggedIn.Provider value={{ loggedIn, setLoggedIn }}>
        <UserUID.Provider value={{ userUID, setUserUID }}>
          <UserEmail.Provider value={{ userEmail, setUserEmail }}>
            <UserDisplayName.Provider
              value={{ userDisplayName, setUserDisplayName }}
            >
              <Router>
                <Routes>
                  <Route path="/signup" Component={Register} />
                  <Route path="/" Component={LoginPage} />
                  <Route path="/homepage" Component={GenCoursePage} />
                </Routes>
              </Router>
            </UserDisplayName.Provider>
          </UserEmail.Provider>
        </UserUID.Provider>
      </isLoggedIn.Provider>
    </>
  );
}

export default App;

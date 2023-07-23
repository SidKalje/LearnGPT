import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.tsx";
import LoginPage from "./components/LoginPage.tsx";
import Register from "./components/Register.tsx";
function App() {
  useEffect(() => {
    fetch("/api").then(() => {});
  }, []);

  return (
    <>
      <Register />
    </>
  );
}

export default App;

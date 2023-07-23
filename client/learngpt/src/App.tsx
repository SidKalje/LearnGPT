import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.tsx";
function App() {
  useEffect(() => {
    fetch("/api").then(() => {});
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;

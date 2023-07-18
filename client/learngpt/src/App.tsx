import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api").then(() => {});
  }, []);

  return;
  <></>;
}

export default App;

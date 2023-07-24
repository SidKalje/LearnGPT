import React, { useState } from "react";
import axios from "axios";

function GenCoursePage() {
  const [GPTResponse, setGPTResponse] = useState("");

  const getGPTResponse = async () => {
    const prompt = "your-prompt-goes-here"; //replace this with your actual prompt
    try {
      const response = await axios.post("http://localhost:5000/api/gpt", {
        prompt: prompt,
      });
      console.log(response.data);
      setGPTResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      GenCoursePage
      <button onClick={getGPTResponse}>Generate Text</button>
      <div>{GPTResponse}</div>
    </div>
  );
}

export default GenCoursePage;

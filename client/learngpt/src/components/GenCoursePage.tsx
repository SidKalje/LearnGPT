import React, { useState } from "react";
import "../styles/GenCoursePageStyles.css";
import axios from "axios";

function GenCoursePage() {
  const [GPTResponse, setGPTResponse] = useState("");
  const [input, setInput] = useState("");
  const getGPTResponse = async () => {
    const prompt = `I want to learn this concept in chemistry: ${input}. Create a roadmap of steps I can take to learn that concept. Make each step no more than 100 words. At the end of each step, put a "#". Then, for that step, give me specific keywords, each started with a $, like "$motion\\", which I can put into youtube to get sample videos explaining that concept. Avoid any repetition between steps, and if a step is not necessary, there is no need to include it. Do not repeat keywords in steps.`;
    const response = await axios.post("/api/gpt", { prompt: prompt });
    console.log(response.data);
    setGPTResponse(response.data);
  };

  return (
    <div>
      GenCoursePage
      <button onClick={getGPTResponse} className="standardButton">
        Generate Text
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>{GPTResponse}</div>
    </div>
  );
}

export default GenCoursePage;

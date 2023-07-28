import React, { useState } from "react";
import "../index.css";
import "../styles/GenCoursePageStyles.css";
import axios from "axios";
import { Input } from "../shadcncomponents/Input";
import { Label } from "../shadcncomponents/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcncomponents/Select";

function GenCoursePage() {
  const [GPTResponse, setGPTResponse] = useState("");
  const [input, setInput] = useState("");
  const subjects = [
    "Mathematics",
    "English Language",
    "Science",
    "Social Studies",
    "History",
    "Computer Science",
    "Biology",
    "Chemistry",
    "Physics",
    "Literature",
    "Music",
    "Foreign Language",
  ];
  const [subject, setSubject] = useState("Mathematics");

  const listSubjects = (subjectGiven: string) => {
    return <SelectItem value={subjectGiven}>{subjectGiven}</SelectItem>;
  };
  const getGPTResponse = async () => {
    const prompt = `I want to learn this concept in chemistry: ${input}. Create a roadmap of steps I can take to learn that concept. Make each step no more than 100 words. At the end of each step, put a "#". Then, for that step, give me specific keywords, each started with a $, like "$motion\\", which I can put into youtube to get sample videos explaining that concept. Avoid any repetition between steps, and if a step is not necessary, there is no need to include it. Do not repeat keywords in steps.`;
    const response = await axios.post("/api/gpt", { prompt: prompt });
    console.log(response.data);
    setGPTResponse(response.data);
  };
  /* fields to have:
  - input field for concept(character limit)
  - input field for overall subject, but pick from a dropdown menu
  - input field for what student struggles with, wants to learn(character limit)
  - input field for what student already knows(character limit)
   */
  return (
    <>
      <div className="flex flex-col px-16 items-center align-middle justify-center w-screen h-screen">
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => listSubjects(subject))}
            </SelectContent>
          </Select>
          <div>
            <Label htmlFor="concept">Concept</Label>
            <Input
              id="concept"
              type="text"
              placeholder="What concept do you want to learn?"
            />
          </div>
          <Input />
          <Input />
        </div>
      </div>
    </>
  );
}

export default GenCoursePage;

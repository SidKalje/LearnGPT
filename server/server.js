const express = require("express");
const axios = require("axios");

require("dotenv").config();
const apiKey = process.env.OPENAI_API_KEY;
const app = express();

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

app.get("/api/gpt", async (req, res) => {
  const params = {
    prompt:
      'I want to learn this concept in chemistry: ionic bonds. Create a roadmap of steps I can take to learn that concept. Make each step 100 words. At the end of each step, put a "#". Then, for that step, give me specific keywords, each started with a $, like "$motion", which I can put into youtube to get sample videos explaining that concept. ',
    model: "text-davinci-003",
    max_tokens: 1000,
    temperature: 0,
  };
  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      const resultArray = result.data.choices[0].text.split("#");
      const finalResultArray = resultArray.map((element) => element.split("$"));
      res.send(resultArray);
      res.send(finalResultArray);
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = 5000;
app.listen(port, () => console.log(`The Server Is Listening On Port ${port}!`));

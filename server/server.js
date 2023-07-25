const express = require("express");
const axios = require("axios");

require("dotenv").config(); // Configuring dot env to load env variables
const apiKey = process.env.OPENAI_API_KEY;
const app = express();

app.use(express.json())

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

app.post("/api/gpt", async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const params = {
    prompt: prompt
      ,
    model: "text-davinci-003",
    max_tokens: 1000,
    temperature: 0,
  };
  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      const resultArray = result.data.choices[0].text.split("#");
      const finalResultArray = resultArray.map((element) => element.split("$"));
      res.send(finalResultArray);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

const port = 5000;
app.listen(port, () => console.log(`The Server Is Listening On Port ${port}!`));

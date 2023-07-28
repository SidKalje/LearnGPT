const express = require("express");
const axios = require("axios");

require("dotenv").config(); // Configuring dot env to load env variables
const apiKey = process.env.OPENAI_API_KEY;
const app = express();

app.use(express.json());

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
    prompt: prompt,
    model: "text-davinci-003",
    max_tokens: 1000,
    temperature: 0,
  };
  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      const stepsKeywords = result.data.choices[0].text.split("@"); // Splitting the result into an array of steps
      //map through the array of steps and keywords, and split the big array into 2 small arrays. one for steps and one for keywords. the order goes steps, keywords, steps, etc.
      const finalResultArray = stepsKeywords.map((stepIndividual) => {
        const [step, keywordsString] = stepIndividual.split("#");
        const keywords = keywordsString.split("$").filter(Boolean);
        return [step, keywords];
      });

      //filter out empty arrays
      const finalResult = finalResultArray.filter((item) => item[0] !== "");
      finalResult = finalResult.map((item) => {
        const keywords = item[1];
        const combinedString = keywords.join("|");
        console.log("Combined string: " + combinedString);
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

const port = 5000;
app.listen(port, () => console.log(`The Server Is Listening On Port ${port}!`));

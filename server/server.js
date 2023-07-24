const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

app.post("/api/gpt", async (req, res) => {
  const prompt = req.body.prompt;
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', 
            {
                prompt: prompt,
                max_tokens: 60
            },
            {
                headers: {
                    'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
                    'Content-Type': 'application/json'
                }
            }
        );
        res.json(response.data.choices[0].text);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error while fetching data from GPT-3");
    }
});



const port = 5000;
app.listen(port, () => console.log(`The Server Is Listening On Port ${port}!`));

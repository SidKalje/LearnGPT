import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
const port = 5000;
app.listen(port, () => console.log(`The Server Is Listening On Port ${port}!`));

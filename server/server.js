import express from 'express';

const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/api/something", (req, res) => {
  res.json("HELLO").status(200)
})

app.get("/", (req, res) => {

})

app.listen(PORT, function () {
  console.log(`Your server is running on port: ${PORT}`);
});
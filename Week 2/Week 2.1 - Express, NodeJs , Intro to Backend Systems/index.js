const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  let counter = req.query.counter;
  let calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  let answer = "the sum is" + calculatedSum;
  res.send(answer);
}

function createUser(req, res) {
  res.send("Hello, tihs is post request");
}

app.get("/handlesum", handleFirstRequest);
app.post("/createUser", createUser);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    sum = sum + i;
  }
  return sum;
}

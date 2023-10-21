const express = require("express");
const app = express();
const port = 3000;
let bodyParser = require("body-parser");
let numerOfReq = 0;

app.use(bodyParser.json());

// middleware function
// function middleware1(req, res, next) {
//   numerOfReq = numerOfReq + 1;
//   console.log(numerOfReq);
//   next();
// res.send("Error inside middleware")
// }

// app.use(middleware1);

function handleFirstRequest(req, res) {
  // console.log(req.body);

  // console.log(req.headers);
  let counter = req.query.counter;
  // if (counter < 1000) {
  let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateMul(counter);
  let answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  // console.log(calculatedSum);
  // let answer = "the sum is" + calculatedSum;
  // res.send(answer);
  // } else {
  res.status(200).send(answerObject);
  // }
}

// function createUser(req, res) {
//   res.send("Hello, tihs is post request");
// }

// app.get("/handlesum", handleFirstRequest);

function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
}

// app.get("/", givePage);
// app.post("/handlesum", handleFirstRequest);
app.get("/handlesum", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}
function calculateMul(counter) {
  let ans = 1;
  for (let i = 1; i <= counter; i++) {
    ans = ans * i;
  }
  return ans;
}

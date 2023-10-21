function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}

let sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handlesum?counter=5", sendObj).then(callbackFn);

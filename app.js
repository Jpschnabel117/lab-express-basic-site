const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/alvin", (request, response, next) => {
  response.sendFile(__dirname + "/views/lord-redund.html");
});
app.get("/home2", (request, response, next) => {
  response.sendFile(__dirname + "/views/redundant-home.html");
});
app.get("/alvin2", (request, response, next) => {
  response.sendFile(__dirname + "/views/lord-redund2.html");
});
app.listen(3001, () => console.log("server up"));

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var r = num1+num2;
  res.send("The result is " + r);
});

app.post("/bmicalculator", function(req, res){
  var yourHeight = parseFloat(req.body.yourHeight);
  var yourWeight = parseFloat(req.body.yourWeight);
  var result = yourWeight/(yourHeight*yourHeight);
  var bmi = parseFloat(result).toFixed(2);
  res.send("Your BMI is: " + bmi);
});

app.listen(3000, function(){
  console.log("Server 3000 started");
});

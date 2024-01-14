require('dotenv').config()
const express = require('express')
const app = express();

PORT = 3000;

const money = {
    cashflow: "game"
}
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/same",(req,res) => {
    res.json(money)
})

app.listen(PORT,(req,res) => {
    console.log("App is Listed Successfully....")
})
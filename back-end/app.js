const express = require("express");
const transactionsController = require("./controllers/transactions");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())


app.use((req,res, next) => {
  next();
})
app.use("/transactions", transactionsController);


// ROOT
app.get("/", (req, res) => {
  res.send("Budget App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!")
})

module.exports = app;
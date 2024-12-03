const express = require("express");
const {db, db2} = require('./config/database')
const adminrouter = require("./routers/admin_router");
const cookies = require('cookie-parser')
const path = require('path')
const app = express();
require("dotenv").config();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use("/uploads", express.static("uploads"));

app.use(express.static(path.join(__dirname,'public')));

app.use(cookies());

app.use(adminrouter)

app.listen(8089, (err) => {
  db();
  if (!err) {
    console.log("http://localhost:8089");
  }
});
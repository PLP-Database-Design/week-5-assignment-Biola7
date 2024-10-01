//importing the dependencies
const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

// cors and ejs

// Configuring connection object
dotenv.config();

// Creating a connection object
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// basic endpoint to say Hello World....
// this group of code is just to test if the server
// is running and can perform actions
//
// app.get('',(req, res) => {
//     res.send("Hello World, Allan helped")
// })

// Testing the connection
db.connect((err) => {
  // if connection is not successful
  if (err) {
    return console.log("Error connection to the databse:", err);
  }

  // if connection is succesful
  console.log("Succesfully connected to MySql ", db.threadId);
});

// this is not important
 app.set('view engine', 'ejs')
 app.set('views', __dirname + '/views')


// Question 1
/*
app.get("", (req, res) => {
  const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";
  db.query(getPatients, (err, data) => {
    if (err) {
      return res.status(400).send("Failed to get patients", err);
    } 
*/

// Question 2
/*
app.get("", (req, res) => {
  const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers";
  db.query(getProviders, (err, data) => {
    if (err) {
      return res.status(400).send("Failed to get provider information", err);
      }
*/

/* Question 3
 app.get("", (req, res) => {
     const getPatients = "SELECT first_name FROM patients";
     db.query(getPatients, (err, data) => {
     if (err) {
         return res.status(400).send("Failed to get patient information", err);
         }
*/

// Question 4
app.get("", (req, res) => {
      const getProviders = "SELECT * FROM providers ORDER BY provider_specialty ASC";
      db.query(getProviders, (err, data) => {
      if (err) {
          return res.status(400).send("Failed to get provider information", err);
          }


    // res.status(200).send(data);
    res.status(200).render('data', {data})
  });
});

//start and listen to the server
const PORT = 3300;
app.listen(3300, () => {
  console.log(`Server is running on PORT 3300...`);
});

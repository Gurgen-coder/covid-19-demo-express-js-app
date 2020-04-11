const express = require('express');
const router = express.Router();
const axios = require('axios');

// Home page route.
router.get('/', (req, res) => {
  const apiUrl = "https://api.covid19api.com/summary";
  axios.get(apiUrl).then((response) => {
      res.render("home", {
        appName: "My COVID-19 Tracker",
        pageName: "COVID-19 Cases",
        data: response.data,
      });
    })
    .catch(function (err) {
      return console.error(err);
    });
});

// About page route.
router.get('/about', function (req, res) {
  res.render("about", {
    appName: "My COVID-19 Tracker",
    pageName: "About",
  });
});

module.exports = router;
/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const axios = require("axios")
const express = require('express');
const router = express.Router();

module.exports = (db) => {


  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/add_task", (req, res) => {
    const newTask = req.body
    console.log("this is my task", newTask)
    res.send("hello")
  });

  router.post("/add_task", (req, res) => {
    const { item } = req.body




    //api for food start type ingredient/recipe

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
      params: { prefix: item },
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
      }
    };

    axios.request(options).then(function (response) {
      //	console.log(response.data);
      response.data.results.forEach((response) => {
        console.log(response.type)
        if (response.type !== "ingredient") {
        } else {
          const productItem = `
      <li class="list-group-item ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          ${item}
        </label>
      </li>
      `

        }
      })
    }).catch(function (error) {
      console.error(error);
    });
    //api for food end

    res.send("hello")
  });

  return router;
};

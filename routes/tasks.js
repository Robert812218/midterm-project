/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const axios = require('axios');
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body);
    const item = req.body.item;

    const foodCategoryOptions = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
      params: { prefix: item },
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
      }
    };

    axios.request(foodCategoryOptions)
      .then(response => {

        console.log(response.data);
        const results=response.data.results
        if (results && results.length) {//if not empty its food

          res.json({ item, category: 'food' });
          return;

        }
        res.json({ item, category: 'movie' });
        return axios.request(movieOptions);
      })
      //.then
      .catch(err => {
        console.log(err.msg);
      });

  });


  return router;
};

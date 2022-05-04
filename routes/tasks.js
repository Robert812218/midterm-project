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
    let category_id = 5;
    const removeCategory = array => {
      let uiString = '';
      let hyperString = '';
      for (i = 1; i < array.length; i++) {
        uiString += `${array[i]} `;
        hyperString += array[i];
      }
      return { uiString, hyperString };
    };

    const addMovie = (item) => {

      const itemSplit = item.split(' ');
      const value = removeCategory(itemSplit);

      if (item.includes('eat')) {
        category_id = 2
        res.json({ value, category: 'food', category_id });
      } else if (item.includes('watch')) {
        category_id = 3
        res.json({ value, category: 'movie', category_id });
      } else if (item.includes('read')) {
        category_id = 1
        res.json({ value, category: 'read', category_id });
      } else if (item.includes('buy')) {
        category_id = 4
        res.json({ value, category: 'buy', category_id });
      } else {
        category_id = 5
        res.json({ value, category: 'other', category_id });
      }
      insertToDB(value.uiString, category_id)
    };

    const insertToDB = (value, category_id) => {

      const user_id = 1
      const queryValues = [value, user_id, category_id]
      const queryString = `INSERT INTO
                  todos (name, user_id, category_id)
                  VALUES ($1, $2, $3) RETURNING *`
      return db.query(queryString, queryValues).then(data => {
        // console.log(data.rows);
      })
    }

    addMovie(item);


  });

  router.get('/', (req, res) => {
    const user_id = 1
    const queryValues = [user_id]
    const queryString = `SELECT * FROM todos WHERE user_id = $1`
    return db.query(queryString, queryValues).then(data => {
      res.json(data.rows)
    })
  })

  router.get('/:id', (req, res) => {
    let itemId = req.params.id
    return db.query(`DELETE FROM todos WHERE id = ${itemId}`).then(data => {
      res.json(data)
    })
  })

  return router;
};

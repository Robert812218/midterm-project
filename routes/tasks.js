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
    const item = req.body.item;
    let category_id = 5;

    const addMovie = (item) => {

      if (item.includes('eat')) {
        category_id = 2
      } else if (item.includes('watch')) {
        category_id = 3
      } else if (item.includes('read')) {
        category_id = 1
      } else if (item.includes('buy')) {
        category_id = 4
      } else if (!item.includes('buy' || 'read' || 'watch' || 'eat')) {
        category_id = 5
      }
      item = item.split(' ').slice(1).join(' ')
      insertToDB(item, category_id)
    };

    const insertToDB = (item, category_id) => {

      const user_id = 1
      const queryValues = [item, user_id, category_id]
      const queryString = `INSERT INTO
                  todos (name, user_id, category_id)
                  VALUES ($1, $2, $3) RETURNING *`
      db.query(queryString, queryValues).then(data => {
        console.log(data);
        res.json({ value: data.rows[0] })
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

  // delete from DB
  router.get('/:id', (req, res) => {
    let itemId = req.params.id
    return db.query(`DELETE FROM todos WHERE id = ${itemId}`).then(data => {
      res.json(data)
    })
  })

  return router;
};

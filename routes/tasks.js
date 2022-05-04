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

    const removeCategory = array => {
      let uiString = ''
      let hyperString = ''
      for(i=1; i< array.length; i++){
        uiString += `${array[i]} `
        hyperString += array[i]
      }
      return {uiString, hyperString}
    }

    const addMovie = (item) => {

      const itemSplit = item.split(' ')
      const value = removeCategory(itemSplit)

      if (item.includes('eat')){
        res.json ({value, category: 'food'})
        return
      }   if (item.includes('watch')){
        res.json ({value, category: 'movie'})
        return
      } if (item.includes('read')){
        res.json ({value, category: 'read'})
        return
      } if (item.includes('buy')){
        res.json ({value, category: 'buy'})
        return
      } else{
        res.json ({item, category: 'other'})
        return
      }
      }
      addMovie(item)

    // Promise.all(



      //   console.log("food catergory result", response.data);
      //   const results = response.data.results;
      //   if (results && results.length) {  //if not empty its food
      //     return {item, category: 'food'};

      //   }
      //   res.json({ item, category: 'movie' });
      //   return axios.request(movieOptions);
      // })
      // .catch(err => {
      //   console.log(err.msg);
      // }), checkMovieCategories(item)])
      // .then(results => {
      //   const foodResult = results[0]
      //   console.log("this is my results", results);
      //   if(foodResult){
      //     res.json(foodResult)
      //   }
      //   if(!foodResult){
      //     const movieResult = results[1].search
      //     if (movieResult.length > 1){
      //       res.json(movieResult[0])
      //     }

        // }
      // });
  });



  return router;
};

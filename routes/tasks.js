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

  //   const foodCategoryOptions = {
  //     method: 'GET',
  //     url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
  //     params: { prefix: item },
  //     headers: {
  //       'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  //       'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
  //     }

  //   };
  //   const checkMovieCategories = (inputValue) => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://mdblist.p.rapidapi.com/',
  //       params: { s: inputValue },
  //       headers: {
  //         'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
  //         'X-RapidAPI-Key': '0a541a7215mshcf5407821f35232p1d7358jsn1173d3a79f29'
  //       }
  //     };
  //     try {
  //       return axios.request(options)
  //         .then(function (response) {
  //           return response.data;
  //         }).catch(function (error) {
  //           console.error(error);
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // const checkCategory = async (item)=>{
  //  let response = await axios.request(foodCategoryOptions)
  //     const results = response.data.results
  //     if (results && results.length) {  //if not empty its food
  //         res.json ({item, category: 'food'});
  //     } if (!results){
  //       res.json({item, category: 'movie' })
  //     }
  //        response = await checkMovieCategories(item)
  //     console.log('this is my movies results', response)
  // }
  // checkCategory(item)


    const addMovie = (item) => {
      console.log('item is', item.includes('watch'))
      if (item.includes('eat')){
        res.json ({item, category: 'food'})
      }   if (item.includes('watch')){
        res.json ({item, category: 'movie'})
      } if (item.includes('read')){
        res.json ({item, category: 'read'})
      } if (item.includes('buy')){
        res.json ({item, category: 'buy'})
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

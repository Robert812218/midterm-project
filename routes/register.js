const express = require('express');
// const app = express;
const router = express.Router();
// const bcrypt = require('bcryptjs');

// module.exports = (db) => {
//   router.get("/register", (req, res) => {
//     res.render("/");
//   });

//   router.get("/login", (req, res) => {
//     res.render("/");
//   });
//   return router;
// };

module.exports = (db) => {
  router.get("/register", (req, res) => {
    if (req.session.userID) {
      res.redirect("/");
    } else {
      res.render("/register");
    }
  });

  router.post("/register", (req, res) => {
    const newUserEmail = req.body.new-user;
    const newUserPass = req.body.new-pass;

    if (!newUserEmail || !newUserPass) {
      res.status(400).send("Please enter a valid email or password.");
    } else if (newUserEmail && newUserPass) {
      let userID = { 
        email: newUserEmail,
        password: newUserPass
      }
      console.log(userID);
      res.redirect('/');
    };

  });

  router.get("/login", (req, res) => {
    res.render("/");
  });
}


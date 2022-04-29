const express = require('express');
// const app = express;
const router = express.Router();
const bcrypt = require('bcryptjs');

// module.exports = (db) => {
//   router.get("/register", (req, res) => {
//     res.render("/");
//   });

//   router.get("/login", (req, res) => {
//     res.render("/");
//   });
// };

module.exports = (db) => {
  router.get("/register", (req, res) => {
    if (req.session.userID) {
      res.redirect("/");
    } else {
      res.render("/register");
      
      router.post("/register", (req, res) => {
        const newUserEmail = req.body.newUser;
        const newUserPass = req.body.newPass;

        let userID = generateRandomString(10);
        if (!newUserEmail || !newUserPass) {
          res.status(400).send("Invalid email and/or password");
        } else if (newUserEmail && newUserPass) {
          users[userID] = {
            id: userID,
            email: newUserEmail,
            password: bcrypt.hashSync(newUserPass, 15)
          };

          req.session.currentUser = userID;
          res.redirect('/');
        }
      });
    }
  });
}
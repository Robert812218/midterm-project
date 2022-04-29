const express = require('express');
const router = express.Router();
const app = express();
// need to pull generateRandomString(), not sure where to save it yet though

const users = {
  "TORQUESONN": {
    id: "TORQUESONN",
    email: "torquesonn@govnah.biz",
    password: "AA1355"
  },
  "steveo": {
    id: "steveo",
    email: "steveo5611@gmail.com",
    password: "5611"
  },
  "bojack": {
    id: "bojack",
    email: "bojackhorseman@shaw.ca",
    password: "horsehorse335"
  }
}

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     res.render("login");
//   });

//   router.get("/register", (req, res) => {
//     res.render("/register");
//   });
//   return router;
// };

module.exports = (db) => {
  router.get("/", (req, res) => {
    if (req.session.userID) {
      res.redirect("/");
    } else {
      res.render("/login");
      router.post("/login", (req, res) => {
        const userMail = req.body.email;
        const userPass = req.body.password;
        const storedUser = getUserByEmail(userMail, users);

        if (!getUserByEmail(userMail, users)) {
          res.status(403).send("No account with this email has been found.");
        } else {
          if (storedUser.password !== userPass) {
            res.status(403).send("Incorrect password.");
          } else {
            res.redirect("/");
          }
        }
      })
    }
  });

  
};
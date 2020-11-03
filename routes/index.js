var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    sessionID: req.sessionID,
    host: process.env.CHILD_SERVER_NAME,
  });
});

router.get("/child", function (req, res, next) {
  res.render("child", { sessionID: req.sessionID });
});

module.exports = router;

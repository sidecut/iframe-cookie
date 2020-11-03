var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    sessionID: req.sessionID,
    host: req.hostname,
  });
});

router.get("/child", function (req, res, next) {
  res.render("child", { sessionID: req.sessionID });
});

module.exports = router;

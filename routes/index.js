var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.dir(req.cookies);
  res.render("index", {
    title: "Express",
    sessionID: req.sessionID,
  });
});

router.get("/child", function (req, res, next) {
  console.dir("Child cookies", req.cookies);
  res.render("child", { sessionID: req.sessionID });
});

module.exports = router;

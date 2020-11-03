var express = require("express");
const session = require("express-session");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    sessionID: req.sessionID,
    childHost: process.env.CHILD_SERVER_NAME,
  });
});

router.get("/child", function (req, res, next) {
  res.render("child", {
    host: req.hostname,
    sessionID: req.sessionID,
  });
});

router.get("/keepalive", (req, res, next) => {
  res.send(200, { sessionID: session.sessionID, time: Number(new Date()) });
});

module.exports = router;

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

router.get("/keepalive/:source", (req, res, next) => {
  req.session.keepaliveTimestamp = Number(new Date());
  const payload = {
    source: req.params.source,
    sessionID: req.sessionID,
    time: req.session.keepaliveTimestamp,
    expires: req.session.cookie.expires,
  };
  console.dir(payload);
  res.send(payload);
});

module.exports = router;

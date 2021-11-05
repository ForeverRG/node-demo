const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ name: "range" });
});

module.exports = router;

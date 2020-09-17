const express = require("express");
const router = express.Router();
const Plant = require("../models/plant");

router.get("/plants", (req, res, next) => {
  Plant.find({}, "name")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/plants", (req, res, next) => {
  if (req.body.name && req.body.type) {
    Plant.create({
      name: req.body.name,
      type: req.body.type,
      care: req.body.care,
    })
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/plants/:id", (req, res, next) => {
  Plant.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

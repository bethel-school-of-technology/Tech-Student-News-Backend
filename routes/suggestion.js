var express = require("express");
var express = require('express');
var router = express.Router();
let SuggestionModel = require("../models/suggestion");

router.get("/", function(req, res, next) {
    SuggestionModel.find()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

router.get("/", function(req, res, next) {
  EventsModel.findAll()
  .then(result => res.send(result))
  .catch(error => res.status(500).send(error));
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newSuggestion = new SuggestionModel();
  newSuggestion.name = req.body.name;
  newSuggestion
    .save()
    .then(suggestion => res.json(suggestion))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

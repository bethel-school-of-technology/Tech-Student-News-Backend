var express = require('express');
var router = express.Router();
let EventsModel = require("../models/event");

router.get("/", function(req, res, next) {
    EventsModel.find()
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
  let newEvents = new EventsModel();
  newEvents.name = req.body.name;
  newEvents
    .save()
    .then(events => res.json(events))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

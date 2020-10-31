var express = require('express');
var router = express.Router();
let ArticlesModel = require("../models/articles");

router.get("/", function(req, res, next) {
  ArticlesModel.find()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

router.get("/", function(req, res, next) {
  ArticlesModel.findAll()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newArticles = new ArticlesModel();
  newArticles.name = req.body.name;
  newArticles
    .save()
    .then(articles => res.json(articles))
    .catch(error => res.status(400).send(error));
});

module.exports = router;

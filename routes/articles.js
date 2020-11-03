const { request } = require('express');
var express = require('express');
var router = express.Router();
let ArticlesModel = require("../models/article");

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

router.put('/:id',function(req, res,next)  {
  let newArticles = new ArticlesModel();
  newArticles.findByIdAndUpdate(parsInt(req.params.id,req.body));
  newArticles
.save()
.then(articles => res.json (articles))
.catch(error => res.status(400).send(error));
});

router.delete('/:id',function(req,res,next){
  var articles = getArticlesById(parsInt(req.params.id));
  if(articles){
removeArticles(parseInt(req.params.id));
res.send('ok');
  }else {
    res.status(400).send("record not found");
  }
  
});


module.exports = router;

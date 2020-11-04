var express = require('express');
var router = express.Router();
let Articles = require("../models/article");

router.get("/", function(req, res, next) {
  let newArticles = Articles(); 
  newArticles.find()
  .then(articles => res.json(articles))
  .catch(error => res.status(404).send( error  ));
});

router.get('/:id', (req, res) => {
  let newArticles = Articles(); 
  newArticles.findById(req.params.id)
    .then(result => res.json(result))
    .catch(error => res.status(404).send( error ));
});

router.post('/', (req, res) => {
  let newArticles = Articles(); 
     newArticles.create(req.body)
    .then(result => res.json( result ))
    .catch(error => res.status(400).send(error));
});

router.put('/:id', (req, res) => {
  let newArticles = Articles(); 
  newArticles.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result ))
    .catch(error =>
      res.status(400).json(error)
    );
});

router.delete('/:id', (req, res) => {
  let newArticles = Articles(); 
  newArticles.findByIdAndRemove(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(error => res.status(404).send( error));
});


module.exports = router;

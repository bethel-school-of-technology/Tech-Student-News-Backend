var express = require('express');
var router = express.Router();
let Articles = require("../models/article");

router.get("/", function(req, res, next) {
  Articles.find()
  .then(articles => res.json(articles))
  .catch(_err => res.status(404).json({ noarticlesfound: 'No articles found' }));
});

router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(_err => res.status(404).json({ noarticlefound: 'No Article found' }));
});

router.post('/', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(_err => res.status(400).json({ error: 'Unable to add this book' }));
});

router.put('/:id', (req, res) => {
  Artcle.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(_err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then(articles => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});


module.exports = router;

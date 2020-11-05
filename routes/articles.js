var express = require('express');
var router = express.Router();
var Article = require("../models/article");

router.get("/", async (req, res) => {
  try{
  const article = await Article.find(); 
  res.status(200).json(
  article
  );
} catch(err){
res.status(404).json({
  status:'fail',
  message: err
});
} 
});

router.get("/:id", async (req, res) => {
  try{
  const article = await Article.findById(req.params.id);
    res.status(200).json(
      article
    );  
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});

router.post('/add', async (req, res) => {
  try{
  const newArticle = await Article.create(req.body);
  res.status(201).json(
    newArticle
  );
} catch(err){
  res.status(400).json({
    status:'fail',
    message: err
  });
}  
});

router.put('/:id', async (req, res) => {
  try {
  const article = await Article.findByIdAndUpdate(req.params.id,req.body);
  res.status(201).json(
     article
  );
} catch(err){
  res.status(404).json({
    status:'fail',
    message: err
  });
} 
});

router.delete('/:id', async (req, res) => {
  try{
  const article = await Article.findByIdAndRemove(req.params.id,req.body); 
  res.status(201).json(
    article
  );
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});
   


module.exports = router;

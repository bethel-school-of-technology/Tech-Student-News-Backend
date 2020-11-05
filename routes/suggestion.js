var express = require("express");
var express = require('express');
var router = express.Router();
Suggestion = require("../models/suggestion");

router.get("/", async (req, res) => {
  try{
  const suggestion = await Suggestion.find(); 
  res.status(200).json(
  suggestion
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
  const suggestion = await Suggestion.findById(req.params.id);
    res.status(200).json(
      suggestion
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
  const newSuggestion = await Suggestion.create(req.body);
  res.status(201).json(
    newSuggestion
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
  const suggestion = await Suggestion.findByIdAndUpdate(req.params.id,req.body);
  res.status(201).json(
     suggestion
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
  const suggestion = await Suggestion.findByIdAndRemove(req.params.id,req.body); 
  res.status(201).json(
    suggestion
  );
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});
   

module.exports = router;

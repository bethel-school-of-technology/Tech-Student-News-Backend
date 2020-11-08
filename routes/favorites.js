var express = require('express');
var router = express.Router();
var Favorites = require("../models/favorites");

router.get("/", async (req, res) => {
  try{
  const favorites = await Favorites.find(); 
  res.status(200).json(
  favorites
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
  const favorites = await Favorites.findById(req.params.id);
    res.status(200).json(
      favorites
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
  const newFavorites = await Favorites.create(req.body);
  res.status(201).json(
    newFavorites
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
  const favorites = await Favorites.findByIdAndUpdate(req.params.id,req.body);
  res.status(201).json(
     favorites
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
  const favorites = await Favorites.findByIdAndRemove(req.params.id,req.body); 
  res.status(201).json(
    favorites
  );
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});
   
module.exports = router;

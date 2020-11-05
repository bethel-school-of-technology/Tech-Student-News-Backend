var express = require('express');
var router = express.Router();
var Event = require("../models/event");

router.get("/", async (req, res) => {
  try{
  const event = await Event.find(); 
  res.status(200).json(
  event
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
  const event = await Event.findById(req.params.id);
    res.status(200).json(
      event
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
  const newEvent = await Event.create(req.body);
  res.status(201).json(
    newEvent
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
  const event = await Event.findByIdAndUpdate(req.params.id,req.body);
  res.status(201).json(
     event
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
  const event = await Event.findByIdAndRemove(req.params.id,req.body); 
  res.status(201).json(
    event
  );
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});
   


module.exports = router;

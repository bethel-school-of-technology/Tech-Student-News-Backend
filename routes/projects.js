var express = require('express');
var router = express.Router();
var Projects = require("../models/projects");

router.get("/", async (req, res) => {
  try{
  const projects = await Projects.find(); 
  res.status(200).json(
  projects
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
  const projects = await Projects.findById(req.params.id);
    res.status(200).json(
      projects
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
  const newProjects = await Projects.create(req.body);
  res.status(201).json(
    newProjects
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
  const projects = await Projects.findByIdAndUpdate(req.params.id,req.body);
  res.status(201).json(
     projects
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
  const projects = await Projects.findByIdAndRemove(req.params.id,req.body); 
  res.status(201).json(
    projects
  );
} catch(err){
  res.status(404).json({
    status: 'fail',
    message: err
  });
}
});
   


module.exports = router;

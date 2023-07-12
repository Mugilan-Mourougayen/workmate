var router = require('express').Router(); 
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken")
const Worker = require('../Schema/WorkerSchma');
//create a user 

router.post('/signup', async(req, res) => {
    try{
    console.log(req.body); 
    const {email,password,name,role}=req.body
    const hash = await bcrypt.hash(password, 10);
    const newWorker = await new Worker({email:email,password:hash,name:name,role:role})
    const created = await newWorker.save()
    res.json(created)
  }catch(err){
    console.log(err.message);
    res.json(err.message)
  }
  })
  
  //verify a user
  router.post('/signin', async(req, res) => {
    try{
      console.log(req.body); 
      const {email,password}=req.body
      const getworker =await Worker.findOne({email:email})
      if(getworker){
  
        const compared = await bcrypt.compare(password,getworker.password);
        console.log(compared);
        console.log("2")
        if(compared){
          const token = await JWT.sign({
            email:getworker.email,
            role:getworker.role,
            id:getworker._id
          },"workmate")
          res.status(200).json({token})

  
        
        }
        else{
          res.status(500).json({"status":"User Denied Invalid Password"})
        }
      }else{
        res.status(500).json(500,{"status":"User Not find"})
      }
    
    }catch(err){
      console.log(err.message);
      res.json(err.message)
    }
  })
  
// get single user 
router.get('/:id', async(req, res) => {
    try{
    const {id} = req.params
    const getworker =await Worker.findOne({id:id})
  }catch(err){
    console.log(err.message);
    res.json(err.message)
  }
  })



  router.patch("/register/:id",async(req, res) => {
    newSepc = req.body.specilization

    const {id} = req.params
    const getworker =await Worker.findOne({_id:id})
    console.log(getworker)
    Worker.findByIdAndUpdate(id, { $addToSet: { specialization: newSepc } }, { new: true })
    .then(updatedWorker => {
      console.log(updatedWorker);
      res.status(200).json({"string":"updated sucessfully","data":updatedWorker})
    })
    .catch(error => {
      console.error(error);
    });
  console.log(id)
  })

  
// get all worker wrt role   
  
  module.exports = router;
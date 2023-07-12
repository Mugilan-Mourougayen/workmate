var router = require('express').Router(); 
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken")
//create a user 

router.post('/signup', async(req, res) => {
    try{
    console.log(req.body); 
    const {email,password,name,role}=req.body
    const hash = await bcrypt.hash(password, 10);
    const newUser = await new User({email:email,password:hash,name:name,role:"client"})
    const created = await newUser.save()
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
      const getuser =await User.findOne({email:email})
      if(getuser){
  
        const compared = await bcrypt.compare(password,getuser.password);
        console.log(compared);
        console.log("2")
        if(compared){
          const token = await JWT.sign({
            email:getuser.email,
            role:getuser.role,
            id:getuser._id
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
    console.log(id)
    const getuser =await User.findOne({_id:id}).select('-password').exec();
    if(getuser){

      res.status(200).json(getuser)
    }else{
      res.status(500).json({"result":"user not found"})
    }
  }catch(err){
    console.log(err.message);
    res.json(err.message)
  }
  })
  
// get all user wrt role   
  
  module.exports = router;
const Category = require("../Schema/CategorySchema")
var router = require('express').Router(); 

router.get('/getall', async(req, res) => {
  const categorylist = await Category.find()
  console.log(categorylist)
  if(categorylist){
    res.json(categorylist[0])
  }else{
    res.status(400).json({ error: "Bad Request" });
  }
})
  
  module.exports = router;



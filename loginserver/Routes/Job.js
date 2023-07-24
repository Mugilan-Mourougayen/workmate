const Job = require('../Schema/JobSchema');

var router = require('express').Router(); 

//create a job 

router.post('/postjob', async(req, res) => {
    try{
    console.log(req.body); 
    const {jobType,description,address,countworker,requiements,status,publisher}=req.body

    const newJob = await new Job({jobType,description,address,countworker,requiements,status,publisher})
    const created = await newJob.save()
    // res.json(created)
    if (created){

        res.status(200).json({ message: "Job posted successfully",created });
    }
else {
    res.status(400).json({ error: "Bad Request" });
}
  }catch(err){
    console.log(err.message);
    res.json(err.message)
  }
  })


  
router.get('/getjobs', async(req, res) => {

  const joblist = await Job.find()
  if(joblist){

    res.json(joblist)
  }else{
    res.status(400).json({ error: "Bad Request" });
  }

})

router.post('/joboption', async(req, res) => {
  options = req.body.options
  console.log(options)
  const joblist = await Job.find({ jobType: { $in: options } })
  console.log(joblist)
  if(joblist){
    res.json(joblist)
  }else{
    res.status(400).json({ error: "Bad Request" });
  }

})




router.get('/getmyjob/:_id', async(req, res) => {
  const id = req.params._id;
console.log(id)
  const joblist = await Job.find({publisher:id})
  if(joblist){

    res.json(joblist)
  }else{
    res.status(400).json({ error: "Bad Request" });
  }

})


router.patch('/apply/:_id', async(req, res) => {
data = req.body
console.log(data)
const id = req.params._id
// console.log(id)
const getjob =await Job.findOne({_id:id})
console.log(getjob)
Job.findByIdAndUpdate(id, { $addToSet: { options: data } }, { new: true })
.then(updatedjob => {
  console.log(updatedjob);
  res.status(200).json({"string":"updated sucessfully","data":updatedjob})
})
.catch(error => {
  console.error(error);
});
console.log(id)

})




router.get('/getonejob/:_id', async(req, res) => {
  const id = req.params._id;
console.log(id)
  const joblist = await Job.findOne({_id:id})
  if(joblist){

    res.json(joblist)
  }else{
    res.status(400).json({ error: "Bad Request" });
  }

})


  module.exports = router;



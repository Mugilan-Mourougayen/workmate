const express = require('express')
const app = express()
const port = 5000

const cors = require('cors');
const mongoose = require("mongoose")




app.use(cors({ 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));
app.use(express.json())
const User = require("./Schema/UserSchema");
const Job = require("./Schema/JobSchema");
const Worker = require("./Schema/WorkerSchma")
const { verifytoken } = require('./Verifytoken');

app.use('/user', require('./Routes/User.js'));
app.use('/auth', require('./Routes/Auth.js'));
app.use('/jobs', require('./Routes/Job.js'));
app.use('/worker', require('./Routes/Worker.js'));
app.use('/category', require('./Routes/Category.js'));


app.get('/dashboard',verifytoken ,async(req, res) => {
 
res.json({"valid":"valid"})

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 
})




mongoose.connect("mongodb://localhost:27017/actionlearning").then(()=>{
  console.log("connected to db");
}).catch(()=>{
  console.log("error in db");
})
const JWT = require("jsonwebtoken")

const verifytoken =async(req,res,next)=>{
        const token = req.header("authtoken")
        if(!token){
            res.error({"error":"no token found"})
        }

  try{
    let user = await JWT.verify(token,"workmate")
    console.log(user)
    next()
  }catch(err){
    res.json({"error":"invalid token"})
  }      

        

}

module.exports = {verifytoken}
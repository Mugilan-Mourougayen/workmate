var router = require('express').Router(); 
const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken")
router.post('/verify', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
  
    try {
      // Verify the token using the secret or public key, depending on how it was signed
      const decodedToken =await JWT.verify(token, 'workmate');
    //   console.log(decodedToken)
      const data = await User.findOne(
        { _id: decodedToken.id }
      ).select('-password').exec();

      // Token is valid
      const responsePayload = {
        message: 'Authentication successful',
        data
        
      };
      res.status(200).json(responsePayload);
    } catch (error) {
      // Token validation failed
      res.sendStatus(401);
    }
  });

  router.post('/verifyworker', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
  
    try {
      // Verify the token using the secret or public key, depending on how it was signed
      const decodedToken =await JWT.verify(token, 'workmate');
    //   console.log(decodedToken)
      const data = await Worker.findOne(
        { _id: decodedToken.id }
      ).select('-password').exec();

      // Token is valid
      const responsePayload = {
        message: 'Authentication successful',
        data
        
      };
      res.status(200).json(responsePayload);
    } catch (error) {
      // Token validation failed
      res.sendStatus(401);
    }
  });

  module.exports = router;
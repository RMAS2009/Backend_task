const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {jwtAuthMiddleware,generateToken} = require('../middlewares/jwt');




const checkAdminRole = async (NID) => {
  try{
       const user = await User.findOne({NID:NID});
       if(user.role === 'admin'){
           return true;
       }
  }catch(err){
       return false;
  }
}

 async function register(req, res) {
   try{

    const user_NID = await User.find({ NID: req.body.NID });
    
    if (user_NID[0]) {

      res.status(200).send({ status: 'This NID is already used' });
    }
   
    else
    {
      const data = req.body;
      const newUser = new User(data);
      const response = await newUser.save();
      console.log("User Registered Successfully");

      

      res.status(200).json({message:'Successfully Registered: ',response});
    }
    
   }
   catch (error) {
    console.error('Error creating User:', error);
    res.status(500).send('Internal Server Error');
  }
};


 async function login(req, res)  {
  try{
    const payload= {
      id:req.body.NID
   }
   console.log(payload)
   const token = generateToken(payload);
    res.status(200).json({message:'Successfully LoggedIn and JWT Token is give below: ',token});

  } catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
     
  }  
};

 async function userDetails(req, res) {
  try{

    const userData = req.user;
    
     
    
    const user = await User.findOne({NID:userData});

   
   
    res.status(200).json({user});

  } catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
     
  }  
};

async function allUserDetails(req, res) {
  try{

    if(! await checkAdminRole(req.user))
      return res.status(403).json({message: 'user does not have admin role'});

    const user = await User.find();
    
   
   
    res.status(200).json({user});

  } catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
     
  }  
};


module.exports = {
 register,login,userDetails,allUserDetails
}

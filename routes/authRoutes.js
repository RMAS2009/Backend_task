const express=require('express');

const {register,login,userDetails,allUserDetails}=require('../controller/usercontroller');

const passport = require('../middlewares/passportAuth');

const {jwtAuthMiddleware,generateToken} = require('../middlewares/jwt');




const router=express.Router();

router.use(passport.initialize());

const passportAuthMiddleware = passport.authenticate('local', {session: false})





// Register a new user 
router.post("/register",register);

// login route
router.post("/login",passportAuthMiddleware,login);

// Fetch logged-in user details
router.get("/me",jwtAuthMiddleware,userDetails);



 // Fetch all the user details(only admin can see all users)
router.get("/allUser",jwtAuthMiddleware,allUserDetails);

module.exports=router;
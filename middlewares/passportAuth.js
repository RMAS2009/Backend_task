const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user'); 

passport.use(new LocalStrategy({ usernameField: 'NID' },async (NID, password, done) => {
    try {
         
        const user = await User.findOne({NID : NID});
        if (!user)
            return done(null, false, { message: 'Incorrect NID.' });
        
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch)
            return done(null, user);
        else
            return done(null, false, { message: 'Incorrect password.' })
    } catch (error) {
        return done(error);
    }
}));

module.exports = passport; 
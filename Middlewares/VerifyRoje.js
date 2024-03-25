const jwt = require('jsonwebtoken');
const User = require("../Models/User");


// check if user is authenticated
module.exports.isAuthenticated = async (req, res, next) =>{

    const {token} = req.cookies;

    // make sure token exists
    if (!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        //verify token
        const decoded = jwt.verify(token,"sammba yero taharka sow" );
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        
    }      res.status(400).json({ error: error.message });
}

// admin middleware
module.exports.isAdmin = (req, res, next) =>{
    if (req.user.role === "tiak-tiak"){
        res.status(400).json({ error: error.message });
    }
    next();

}

const jwt = require("jsonwebtoken");
const user = require('../Database/schema');

const authenticate = async (req,res,next) =>{
    try{
        const token = req.cookies.jwtoken;
        const verify = jwt.verify(token,process.env.SECRET_KEY);
        const rootuser = await urlencoded.findOne({_id:verify._id,"tokens.token":token});
        if(!rootuser) {
            {throw new error("User not Found")};
        }
        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;
        next(); 
    }
    catch(err){
        res.status(401).send("Unauthorised:No token provided");
    }
}

module.exports = authenticate;
const jwt = require("jsonwebtoken");


const authenticate = async  function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (decodedToken.userId!==req.params.userId)
      return res.send({status:false,msg:"You are not authorizre to do this task"})
    next()
}



module.exports.authenticate=authenticate
module.exports.authorise=authorise
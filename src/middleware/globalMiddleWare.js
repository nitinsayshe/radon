const moment = require('moment');

function timeUrlmiddleWare(req,res,next){
    let date =moment().format("YYYY-MM-DD HH-MM-SS") //use moment lib to get date here
    //req.protocol gives the prorocol
    //req.host gives the host url
    let ip=req.ip // return the client ip addr
    let  fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl; 
    console.log(date+"   "+"IP-"+ip+"  "+fullUrl);
    next()
}

module.exports.timeUrlmiddleWare=timeUrlmiddleWare
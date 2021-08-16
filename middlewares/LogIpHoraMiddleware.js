const fs = require('fs');
const path = require('path')
const LogIpHoraMiddleware= (req,res,next)=>{

    let linha = `${req.ip}| ${new Date().toISOString()} | ${req.url}`



    fs.appendFileSync(path.join(__dirname,'..logs/log.txt'),linha)
    next();
}
module.exports = LogIpHoraMiddleware;
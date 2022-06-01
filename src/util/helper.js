

const date=new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const printDate=()=>{
    const todayDate=date.getDate();
    console.log("Todays Date: "+ todayDate)
}
const printMonth=()=>{
    const month=date.getMonth()
    console.log("Month: "+ months[month])
}
const getBatchInfo=()=>{
    console.log("Radon, W3D3 the topic for today is Nodejs module system")
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
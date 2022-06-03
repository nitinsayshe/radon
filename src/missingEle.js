 // const a1=[1,2,3,5,6,7]
 //const a1=[33, 34, 35, 37, 38]


function misssingElement(a1){
    const define_arr=[]
    for (let i=a1[0];i<=a1[a1.length-1];i++){
         define_arr.push(i);
        }
const missingElement=define_arr.filter((obj)=>a1.indexOf(obj) == -1 );

console.log("missing element of array :",missingElement)
return(missingElement)
}

module.exports.missingElement=misssingElement
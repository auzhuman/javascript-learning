function findlocation(zip){
    return new Promise(function(resolve,reject){
        console.log("finding location")
        setTimeout(function(){
            console.log("location is  for ",zip)
            reject() //for catch method
            resolve("butwal") //for then block but first one only is invoked
        },2000)
        
    })

}
 findlocation(1234)
//  .then(function(data){
//      console.log("location successfully found is ",data)
//  },function(data){
//      console.log("error")
.then(function(data){
      console.log("location successfully found is ",data)
 })
 .catch(function(data){
     console.log("location not found")
 })
 .finally(function(){
     console.log("findlocation terminated")
 })




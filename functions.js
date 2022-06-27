// // expression function

// console.log(hello)

// var hello = function () {
// console.log(" i am a function")
// }
// console.log(hello)s
// //calling a function
// // hello();
 
// // declaration type Functions

// // FunctionName() 
// function FunctionName (){
//     console.log("this is a declaration type of functions")
// }

// // FunctionName()  


// Students = ["ram","hari", "rita"]

// function message (Students){  
//     var text = "welcome " + Students + " to js";
//     console.log("text is ",text)
// } 

// message(Students )  

// function mail (details){
//     var text = "sent : " + details.to + " from :" +details.from+" subject : " + details.subject+ " message "+details.message;
//     console.log("text is ",text)
// }
     
// var maildata = {
//   to : "ram@gmail.com",
//   from : "hero@gmail.com",
//   subject : "Sick Leave" ,
// //   message : "message"
//  }
// mail(maildata)

// function vehicle (price){
//     var TwoWheeler = ["bike","scooter"]
//     var FourWheeler = {brand : "suzuki", mileage : "10km/hr"}
//     var EV = "yatri"
//     return [ EV ,  FourWheeler]
// }

// var YouBuyIs = vehicle(10000);
// console.log("you may own a ",YouBuyIs)


//IIFE anonymous

// (function(){
    // console.log(" i am a anonymous function")
// }) ()

//block specific

function classes (numer){
    //name only in this block
    let name = "ram"
    if (numer){
        //name only in this block
        let name = "sita"
        console.log(name)
    }
    else {
        //name only in this block
        let name = "gita"
        console.log(name)
    }
    console.log(name)
}
classes()
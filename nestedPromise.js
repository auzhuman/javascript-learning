
function makePlan(plan){
    return new Promise(function(resolve,reject){
        console.log("I am discussing a business plan")
        setTimeout(function() {
            console.log("now i have a plan");
            // reject(plan)
            resolve(plan);
    
        },2000)
    })
 
}


function budget(amnt){
    return new Promise(function(resolve){
        console.log("i am looking for investors")
        setTimeout(function(){
            console.log("i have a potential investor");
            resolve(amnt);
        },2000)
    })  
}

function hiringStaff(people){
    return new Promise(function(resolve){
        console.log("i am looking for healthy talented staff")
        setTimeout(function(){
            console.log("i have shortlist of candidates");
            resolve(people);
        },2000)
    })

}

function resources(ress){
    return new Promise(function(resolve){
        console.log("My company is looking for resources to my company")
        setTimeout(function(){
            console.log("resouces needed");
            resolve(ress)
        },2000)
    })
}

makePlan("It Messa")
.then(function(data){
    console.log("success in idea planning  ==> ",data)
    return budget(2000000)

})
.then(function(data){
    console.log("successful in investment allocation ==> ",data)
    return hiringStaff("CEO");
})
.then(function(data){
    console.log("successful in hiring ==> ",data)
})
.catch(function(err){
    console.log("There is failure in building company",err);
})
.finally(function(){
    console.log("success in building company ")
})
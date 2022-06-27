
function makePlan(plan,cb){
    console.log("I am discussing a business plan")
    setTimeout(function() {
        console.log("now i have a plan");
        cb(null,plan);

    },2000)
}


function budget(amnt,cb){
    console.log("i am looking for investors")
    setTimeout(function(){
        console.log("i have a potential investor");
        cb(null,amnt);
    },2000)
}

function hiringStaff(people,cb){
    console.log("i am looking for healthy talented staff")
    setTimeout(function(){
        console.log("i have shortlist of candidates");
        cb(null,people);
    },2000)
}

function resources(ress,cb){
    console.log("My company is looking for resources to my company")
    setTimeout(function(){
        console.log("resouces shortlisted");
        cb(null,ress)
    },2000)
}

console.log("i want to build a business")
makePlan("investment company",function(err,done){
    if (err){
        console.log("there is no proper plan ", err)
    }
    else{
        console.log("a successfull plan ",done)
        budget(200000,function(errb,doneb){
            if(errb){
                console.log("no potential investor");
            }
            else{
                console.log("found investor with budget ",doneb)
                resources("computers",function(errc,donec){
                    if (errc){
                        console.log("error in buying resources ",errc)

                    }
                    else{
                        console.log("bought resources ",donec)

                    }
                })

            }
        })
    }
})
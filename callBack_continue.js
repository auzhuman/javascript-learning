// function error done
function searchItem(itemName,cb){
    setTimeout(function(){
        console.log("blocking task")
        cb(null,"sth")
    },3000)

}


searchItem("itemName",function(err,done){
    if (err){
        //failure
        console.log("there is failure in cb --  ",err)
    }
    else{
        //success
        console.log("there is success in cb -- ", done)
    }
})
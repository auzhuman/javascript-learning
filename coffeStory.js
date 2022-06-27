function makeCoffee(flav,cb){
    // 3.below line of code gets exeuted
    console.log("your flavour is ",flav);
    console.log("coffee preparation in process....")
    setTimeout(function(){
        // 5.executed after delay of 3secs
        console.log("waiting is over")
        console.log("coffee is prepared")
        cb();//6.callback is done.
    },3000)
}

// 1.execution start fromm here.
console.log("Hi welcome to the coffee shop")
console.log("what is your prefrence: ")
// 2.call to function is made
var order = makeCoffee("lattee",function(){
    //7.result handling of the callback is made.
    console.log("your order is delivered ");
    console.log("enjoy your coffee")
})
// 4.while there is dealy of 3secs non blocking task gets executed.
console.log("------------NON-BLOCKING TASK-------------")
console.log("read your book while wating")
console.log("-----------------waiting--------------")

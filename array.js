
//object declaration using bracket
var ups = {
    name : "prolink",
    price : 10000,
    color : " black",
    backupTime : "30 mins",
    isDiscounted : false,
    tags : ["ups","discounted","prolink"]
    
}
//console.log("the item is ==>>",ups)

//accessing obj
// console.log("the item is ==>>",ups.isDiscounted)
// using bracket
// console.log("the item is ==>>",ups["tags"])

// add properties in an obj
ups.shop = "gk electronics"
ups.warranty = true
//delete property
delete ups.tags
ups.sales = true
console.log("after adding property +==>",ups)
// array declaration

var laptops = ["dell","lenovo"]
console.log(laptops)

var man = {
    weight :80,
    name :"human",
    age : 19
}

man.address = " butwals"

console.log(man)
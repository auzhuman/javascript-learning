let laptop = {
    brand : "Hp",
    price : 90000,
    ram : 8,
    available : false
}

console.log("values are ",JSON.stringify(laptop))

// for (let key in laptop){
//     console.log("key are ",key)
//     console.log("value is ",laptop[key]) // . cannot be used as . operator explicitly searches for
//                                          //  key in laptop and key changes with each iteration
// }
laptops = ["hp" , "asus" ,"acer","dell","lenovo"] 
console.log(laptops.pop)
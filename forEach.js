 laptop = [{
     brand : "toshiba",
     name : " high",
     price : 98000,
     color : "black"
 },
 {
     brand : "dell",
     name : "inspiron",
     price : 68000,
     color : "black"

 },
 {
     brand : " hp",
     name : "hp pavillion",
     price : 50000,
     color : "silver"
 },
 {
     brand : " lenovo",
     name : "legion",
     price : 110000,
     color :'green'
 }]

//  for (let key in laptop){
//      console.log(laptop[key])
//  }


//FOR EACH
//  laptop.forEach(function(item,index){
//      console.log(item)
//      item.status = "available"
//  })
//  console.log("laptops now ",laptop)

//FILTER
// laptop.filter(function(item,index){
//     if (item.price == 50000){
//         console.log(item)
//     } 
// })

//map
// creates a new array which has a relation with previouw array and  has same
// no of elements

// let laptoplow = laptop.map(function(item,index){
//     if (item.price <100000){
//         return item.price = item.price - item.price * 0.02
//     }
// })
// console.log(laptop)
// console.log(laptoplow)

// some (return true if either of them is true)

const laptopHigh = laptop.some(function(item,index){
    if (item.price === 68000){
        return true
    }
})

console.log(laptopHigh)





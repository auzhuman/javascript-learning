// function address(district){
//     var name = "Ram"
//     function city(cityname){
//         var house = 2
//         var home = name + " address is " + district + " district. " + "His  house no is " + house + " and name of the city is " + cityname+".";
//         // console.log("location : " ,home)
//         return home
//     }
//     return city
// }

// // home1 = address("Rupandehi")
// // console.log(home1("Butwal"))

// home1 = address("Rupandehi")("Butwal")
// console.log(home1)

// addition with var res = addition (2)(4) using closure  
// add also three no

function add (num1){
    function add2(num2){
        function add3 (num3){
            var sum = num1 + num2 + num3;
            return sum
        }
        return add3;
       
    }
    return add2;
}

result = add(5)(4)(1)
console.log("solution is ==> ",result) 
console.log("solution is ==> ",result)
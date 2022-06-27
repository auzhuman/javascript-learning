// class Books {
//     genre ;
//     constructor(){
//         this.genre = " programming"
//         this.name = " c++"
//     }

//     getgenre(){
//         return this.genre
//     }

//     setgenre (newGenre) {
//         this.genre = newGenre
//         return this.genre

//     }
// }

// var ram = new Books();
// console.log(ram)




// class Books{
//     name ;
//     publicaton;
//     constructor(){
//         this.name = "The Hobbit"
//     }

//     getPublication(){
//         this.publicaton = "Sth"
//         return this.publicaton
//     }
// }

// // var obj = new Books()
// // console.log(obj)

// class Library extends Books{
//     constructor(){
//         super();
//         this.Library = "Readers hub"
//     }
// }

// var lib = new Library()
// console.log(lib.getPublication())

// prototype

function Books(){
    console.log("this inside is >> ",this)
}

Books.prototype.name = "The HObbit";
Books.prototype.getname  = function(){
    console.log("this is get name")
    return this.name;
}

var b = new Books();
console.log(b.getname)

 
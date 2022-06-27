function play(title,abc){
    console.log("loading song in process.....")
    setTimeout(function(){
        console.log("this is task block and now the song is played")
        return {title : "title"}
        abc();
    },3000)
}

console.log("what do you want to play")
console.log("take input")
var titles = play("track name",function(){
    console.log("call back function block")
    console.log("called due to play function")
})
// console.log("what is palyed",titles)
// console.log("working on sth while in delay")
// console.log("I am having coffee") 
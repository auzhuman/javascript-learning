function videoplayer(index){
    console.log("index given successfully")
    console.log("loading.........")
    setTimeout(function(){
        console.log("i am ready to play")
        return {trackNo : index,
                status : "playing"}
    },3000)
}

console.log("what do you wanna  play?")
console.log("give the index to play ==> ")
var song = videoplayer(2)
console.log("index palyed is",song)
console.log("played successfully") 
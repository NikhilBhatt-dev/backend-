var main  = document.querySelector("main")
var cursor = document.querySelector(".cursor")


main.addEventListener("mousemove",function(move){
   cursor.style.left = move.x + "px"
   cursor.style.top  = move.y + "px"
})
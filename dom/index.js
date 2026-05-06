// var a  = document.querySelector("h1")
// window.alert(a)
// a.innerHTML = `badal barsha bijli sawan ka pani<br>
// adat pay jyu hasna de tanu`



// // a.style ="color: blue"
// a.style.color = "blue";
// a.style.backgroundColor = "black"
// // a.style = "background-color: red"

// a.addEventListener("click", function(){
//     console.log("hey")
// })


var blub = document.querySelector("div")
var btn  = document.querySelector("button")
var flag = 0


btn.addEventListener("click", function(){
    if(flag == 0){
    blub.style.backgroundColor = "yellow"
    btn.innerHTML ="of"
    flag =1
    }
    else{
    blub.style.backgroundColor = "white"
    btn.innerHTML ="on"
    flag = 0

    }


})



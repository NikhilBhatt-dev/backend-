var isStatus =document.querySelector("h5")
var addFriend = document.querySelector("#add")


var flag  = 0;
addFriend.addEventListener("click", function(){
    if(flag ==0){
    isStatus.innerHTML = "Friends"
    isStatus.style.color="green"
    flag = 1;
    }
    else{
         isStatus.innerHTML = "Stranger"
    isStatus.style.color="red"
    flag =0

    }
})




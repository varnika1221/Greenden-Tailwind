var sidenav =document.getElementById("sidenav")
var menuicon =document.getElementById("menuicon")

var closex =document.getElementById("closex")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})


closex.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
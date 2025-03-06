// Search Bar pop start
let pop_open = document.getElementById("Pop_open");
let Close_menu = document.querySelector(".Close_menu");
let inputs = document.querySelector(".inputs");
let line = document.getElementById("line");
pop_open.addEventListener("click", function () {
    Close_menu.opacity = "1"
    Close_menu.style.height = "325px"
    Close_menu.style.padding = "58px 0px"
    bar.style.transform = "rotate(180deg) scale(1)";
    line.style.width = "93%"
    inputs.opacity = "1"
    bar.style.opacity = "1";
})
let bar = document.getElementById("bar");
bar.addEventListener("click", function () {
    Close_menu.transtion = "all 2s ease"
    Close_menu.opacity = "0"
    inputs.opacity = "0"
    Close_menu.style.height = "0px"
    Close_menu.style.padding = "0px"
    line.style.width = "0%"
    bar.style.transform = "rotate(-180deg) scale(0.4)";
    bar.style.opacity = "0";
})
// Search Bar pop End
//  custom cursor Start
let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + "px"
    cursor.style.top = e.pageY + "px"
});
//  custom cursor End

//  Responsive nav bar Start
let responsive_header = document.querySelector(".responsive_header");
let responsive_bar = document.getElementById("responsive_bar");
responsive_bar.addEventListener("click", function () {
    responsive_header.style.height = "500px";
    responsive_header.style.opacity = "1"
    responsive_header.style.top = "0px"
})
let Res_bar = document.getElementById("Res_bar");
Res_bar.addEventListener("click", function () {
    responsive_header.style.height = "3px";
    responsive_header.style.opacity = "0"
    responsive_header.style.top = "0px"
})
//  Responsive nav bar End
//  Custom radio Start

let point = document.querySelector(".point");
let point_border = document.querySelector(".point_border");

point_border.addEventListener("click", function () {
    point.classList.toggle("remove_point")
});

let point2 = document.querySelector(".point22");
let point_border2 = document.querySelector("#point_border2");

point_border2.addEventListener("click", function () {
    point2.classList.toggle("remove_point2")
})
//  Custom radio End
let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", function(){
  console.log(window.scrollY);
  if(window.scrollY >= 200){
    scroller.style.transform="rotate(-90deg) translateX(11px)"
  
  }
  else{
    scroller.style.transform="rotate(-93deg) translateX(-91px)"

  }
})
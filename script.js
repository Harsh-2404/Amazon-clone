/**************Slide-Images*************/
let flag = 0;


function controller(x){
    flag = flag + x;
    slideshow(flag);
}


slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('image-item'); 
    
    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num <0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

/***********sidebar navigation*********/

const sidebarNavigationEl = document.getElementById("sidebar-container-navigation")
const sidebarOpenNavigationEl = document.getElementById("open-nav-slider")  // All
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-closess")

sidebarOpenNavigationEl.addEventListener("click", ()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")               // OR //  sidebarNavigationEl.classList.add("slidebar-show") 
})
sidebarCloseNavigationEl.addEventListener("click", ()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
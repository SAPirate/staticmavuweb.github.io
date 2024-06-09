function openNav(){
  document.getElementById("mySidenav").style.width = "300px";
}
function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
}

// 

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1500;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1500;
});

// 

var fullImgBox = document.getElementById ("fullImgBox");
var fullImg = document.getElementById ("fullImg");

function openFullImg (pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgBox.style.display="none";
}
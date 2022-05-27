// прелоадер
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      boxDucks.classList.add('active');
      boxTitle.classList.add('active');
    }, 500);
  }

let boxDucks = document.querySelector(".box_ducks");
let boxTitle = document.querySelector(".box_title");


//   nav black background
let nav = document.querySelector("nav");
let blackWallpaper = document.querySelector(".black_wallpaper");

window.onscroll = function () { 
    if (window.pageYOffset > 10){
        nav.style.background = "black";
        blackWallpaper.style.display = "flex";
    }
    else{
        nav.style.background = "none";
        blackWallpaper.style.display = "none";
    }
}



const parallax = document.getElementById("parallax-2");

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.2 + "px";
})
const header = document.querySelector("header");

window.addEventListener("scroll" , function() {
    header.classList.toggle ("header" , window.scrollY > 200)
});
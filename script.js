// MENU

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// TYPING EFFECT

var typed = new Typed(".multiple-text", {
    strings: [
        "Frontend Developer",
        "UI UX Designer",
        "Web Designer",
        "Video Editor"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
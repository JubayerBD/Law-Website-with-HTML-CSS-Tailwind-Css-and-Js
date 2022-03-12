
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', e => {
    menu.classList.toggle("hidden");
})

// Hot Button Movement 

const hot = document.querySelector('.hot-button');
const buttonOne = document.querySelector('.hot-one');
const buttonTwo = document.querySelector('.hot-two');
const buttonThree = document.querySelector('.hot-three');
const buttonFour = document.querySelector('.hot-four');
const buttonFive = document.querySelector('.hot-five');
const buttonSix = document.querySelector('.hot-six');

buttonOne.addEventListener("click", () => {
    hot.style.left = "15px";
})
buttonTwo.addEventListener("click", () => {
    hot.style.left = "120px";
})
buttonThree.addEventListener("click", () => {
    hot.style.left = "220px";
})
buttonFour.addEventListener("click", () => {
    hot.style.left = "340px";
})
buttonFive.addEventListener("click", () => {
    hot.style.left = "430px";
})


// Gsap Animations 

gsap.from(".slider-button-one", {
    opacity: 0, x: -100, duration: 1
});
gsap.from(".slider-button-two", { opacity: 0, x: 100, duration: 1})

const sliderButton = document.querySelector(".slider-button-one");

let buttonFadeIn = (e) => {
    gsap.to(".slider-button-one", {rotation:360, duration: 1});
}
let mouseLeave = (e) => {
    gsap.to(".slider-button-one", {skewY:0 , duration: 1});
}

sliderButton.addEventListener('mouseover', buttonFadeIn);
sliderButton.addEventListener('mouseleave', mouseLeave);
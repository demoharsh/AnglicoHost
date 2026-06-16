// Get elements for mobile menu
const hamburger = document.getElementById('hamburger');
const topNavLinks = document.getElementById('top-nav-links');
const navbar = document.querySelector('.top-navbar');
const dropdownEnablerOne = document.querySelector('.dropdown-enabler-1');
const dropdownEnablerTwo = document.querySelector('.dropdown-enabler-2');
const dropdownEnablerThree = document.querySelector('.dropdown-enabler-3');
const dropdownEnablerFour = document.querySelector('.dropdown-enabler-4');
const dropdownOne = document.querySelector('.dropdown-1');
const dropdownTwo = document.querySelector('.dropdown-2');
const dropdownThree = document.querySelector('.dropdown-3');
const dropdownFour = document.querySelector('.dropdown-4');
const rotateAnimationOne = document.querySelector('.rotate-animation-1');
const rotateAnimationTwo = document.querySelector('.rotate-animation-2');
const rotateAnimationThree = document.querySelector('.rotate-animation-3');
const rotateAnimationFour = document.querySelector('.rotate-animation-4');
const navOverlay = document.createElement('div');
const scrollUpBtn = document.querySelector('.scroll-up-btn');
//const scrollUpBtn = document.querySelector('.topbardropdown');

navOverlay.classList.add('navbar-overlay');
document.body.appendChild(navOverlay);

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
	// let computedStyle = window.getComputedStyle(topNavLinks).display;
 //    if (computedStyle == "none") {
 //    	topNavLinks.style.display = "block";
 //    } else {
 //    	topNavLinks.style.display = "none";
 //    }
 	topNavLinks.classList.toggle('show');
 	navOverlay.classList.toggle('show');
 	navbar.classList.toggle('overlay-active');
 	dropdownOne.classList.remove('show');
	rotateAnimationOne.classList.remove('rotateOneEighty');
	dropdownTwo.classList.remove('show');
	rotateAnimationTwo.classList.remove('rotateOneEighty');
	dropdownThree.classList.remove('show');
	rotateAnimationThree.classList.remove('rotateOneEighty');
	dropdownFour.classList.remove('show');
	rotateAnimationFour.classList.remove('rotateOneEighty');
});

navOverlay.addEventListener('click', ()=>{
	topNavLinks.classList.remove('show');
	navOverlay.classList.remove('show');
	navbar.classList.remove('overlay-active');
	dropdownOne.classList.remove('show');
	rotateAnimationOne.classList.remove('rotateOneEighty');
	dropdownTwo.classList.remove('show');
	rotateAnimationTwo.classList.remove('rotateOneEighty');
	dropdownThree.classList.remove('show');
	rotateAnimationThree.classList.remove('rotateOneEighty');
	dropdownFour.classList.remove('show');
	rotateAnimationFour.classList.remove('rotateOneEighty');
});

dropdownEnablerOne.addEventListener('click', ()=>{
	dropdownOne.classList.toggle('show');
	rotateAnimationOne.classList.toggle('rotateOneEighty');
});

dropdownEnablerTwo.addEventListener('click', ()=>{
	dropdownTwo.classList.toggle('show');
	rotateAnimationTwo.classList.toggle('rotateOneEighty');
});

dropdownEnablerThree.addEventListener('click', ()=>{
	dropdownThree.classList.toggle('show');
	rotateAnimationThree.classList.toggle('rotateOneEighty');
});

dropdownEnablerFour.addEventListener('click', ()=>{
	dropdownFour.classList.toggle('show');
	rotateAnimationFour.classList.toggle('rotateOneEighty');
});

document.addEventListener("mousedown", function (event) {
    if (event.detail > 1) {
        event.preventDefault(); // Prevents double-click selection
    }
}, false);

document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.querySelector("#carousel");
        let isDown = false;
        let startX, scrollLeft;

        carousel.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX;
            scrollLeft = 0;
        });

        carousel.addEventListener("mouseleave", () => {
            isDown = false;
        });

        carousel.addEventListener("mouseup", () => {
            isDown = false;
        });

        carousel.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX) * 2; // Adjust speed
            if (walk > 50) {
                new bootstrap.Carousel(carousel).prev();
                isDown = false;
            } else if (walk < -50) {
                new bootstrap.Carousel(carousel).next();
                isDown = false;
            }
        });

        // Touch support for mobile
        let startTouchX;

        carousel.addEventListener("touchstart", (e) => {
            startTouchX = e.touches[0].clientX;
        });

        carousel.addEventListener("touchmove", (e) => {
            let moveX = e.touches[0].clientX - startTouchX;
            if (moveX > 50) {
                new bootstrap.Carousel(carousel).prev();
            } else if (moveX < -50) {
                new bootstrap.Carousel(carousel).next();
            }
        });
    });

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-79px"; // Hides navbar
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});

window.addEventListener('scroll', ()=>{
	if (window.scrollY >= 100) {
		scrollUpBtn.classList.add('show');
	}else{
		scrollUpBtn.classList.remove('show');
	}
});

scrollUpBtn.addEventListener("click", () => {

const start = window.scrollY;
const duration = 300;
const startTime = performance.now();

function scrollStep(currentTime){

const progress = Math.min((currentTime - startTime) / duration, 1);
window.scrollTo(0, start * (1 - progress));

if(progress < 1){
requestAnimationFrame(scrollStep);
}

}

requestAnimationFrame(scrollStep);

});
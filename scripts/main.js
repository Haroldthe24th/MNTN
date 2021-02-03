function checkIntersec(div1, div2) {
    const div1Cords = div1.getBoundingClientRect();
    const div2Cords = div2.getBoundingClientRect();
    if (div1Cords.top > div2Cords.top) {
        return true;
    }
    return false;
}
const secIndi = document.querySelector(".floating-section-indicator");
const home = document.querySelector("#home");
const secOne = document.querySelector("#sec-1");
const secTwo = document.querySelector("#sec-2");
const secThree = document.querySelector("#sec-3");
function toggleActiveIndicator(index) {
    if (!secIndi.children[index].classList.contains("active-indiactor")) {
        Array.from(secIndi.children).forEach((el) => { el.classList.remove("active-indiactor") })
        secIndi.children[index].classList.add("active-indiactor");
    }
    return;
}
document.addEventListener("scroll", (e) => {
    if (checkIntersec(secIndi, home)) {
        if (!secIndi.children[0].classList.contains("active-indiactor")) {
            toggleActiveIndicator(0)
        }
    }
    if (checkIntersec(secIndi, secOne)) {
        if (!secIndi.children[1].classList.contains("active-indiactor")) {
            toggleActiveIndicator(1);

        }
    }
    if (checkIntersec(secIndi, secTwo)) {
        if (!secIndi.children[2].classList.contains("active-indiactor")) {
            toggleActiveIndicator(2);

        }
    }
    if (checkIntersec(secIndi, secThree)) {
        if (!secIndi.children[3].classList.contains("active-indiactor")) {
            toggleActiveIndicator(3);

        }
    }
})


var leftIn = {
    opacity: 0, duration: 0.3, x: -100
}
var bottomIn = {
    opacity: 0, duration: 0.3, y: 50
}
var bottomLeftSpinning = {
    duration: 3, x: -1000, y: -1000, scale: 0, rotation: 4000
}
gsap.from(".main-header", { opacity: 0, duration: 1, y: -50 });
gsap.from(".floating-contact-us", { opacity: 0, duration: 1, x: -10 });
//section 1 animations
var tl1 = gsap.timeline({
    scrollTrigger: {
        once: true,
        trigger: "#sec-1",
        // pin: true,   // pin the trigger element while active
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start

    }
});
tl1.from("#sec-1-h1", leftIn);
tl1.from("#sec-1-h2", leftIn);
tl1.from("#sec-1-h3", bottomIn);
tl1.from("#sec-1-h4", bottomIn);
//--------------------
//section 2 animations
var tl2 = gsap.timeline({
    scrollTrigger: {
        once: true,
        trigger: "#sec-2",
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start

    }
});
//-------------------
tl2.from("#sec-2-h1", leftIn);
tl2.from("#sec-2-h2", leftIn);
tl2.from("#sec-2-h3", bottomIn);
tl2.from("#sec-2-h4", bottomIn);
//section 3 animations
var tl3 = gsap.timeline({
    scrollTrigger: {
        once: true,
        trigger: "#sec-3",
        start: "top 80%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start

    }
});
//-------------------
tl3.from("#sec-3-h1", leftIn);
tl3.from("#sec-3-h2", leftIn);
tl3.from("#sec-3-h3", bottomIn);
tl3.from("#sec-3-h4", bottomIn);
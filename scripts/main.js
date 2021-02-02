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

document.addEventListener("scroll", (e) => {
    if (checkIntersec(secIndi, home)) {
        if (!secIndi.children[0].classList.contains("active-indiactor")) {
            Array.from(secIndi.children).forEach((el) => { el.classList.remove("active-indiactor") })
            secIndi.children[0].classList.add("active-indiactor");
        }
    }
    if (checkIntersec(secIndi, secOne)) {
        if (!secIndi.children[1].classList.contains("active-indiactor")) {
            Array.from(secIndi.children).forEach((el) => { el.classList.remove("active-indiactor") })
            secIndi.children[1].classList.add("active-indiactor");
        }
    }
    if (checkIntersec(secIndi, secTwo)) {
        if (!secIndi.children[2].classList.contains("active-indiactor")) {
            Array.from(secIndi.children).forEach((el) => { el.classList.remove("active-indiactor") })
            secIndi.children[2].classList.add("active-indiactor");
        }
    }
    if (checkIntersec(secIndi, secThree)) {
        if (!secIndi.children[3].classList.contains("active-indiactor")) {
            Array.from(secIndi.children).forEach((el,index) => { el.classList.remove("active-indiactor") })
            secIndi.children[3].classList.add("active-indiactor");
        }
    }
})
gsap.from(".main-header", { opacity: 0, duration: 1, y: -50 });
gsap.from(".floating-contact-us", { opacity: 0, duration: 1, x: -10 });
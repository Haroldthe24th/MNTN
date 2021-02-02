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
function toggleActiveIndicator(index){
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
gsap.from(".main-header", { opacity: 0, duration: 1, y: -50 });
gsap.from(".floating-contact-us", { opacity: 0, duration: 1, x: -10 });
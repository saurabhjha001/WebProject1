const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navlinks.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOPtion = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOPtion,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOPtion,
    delay: 500,
});


ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOPtion,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOPtion,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOPtion,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOPtion,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOPtion,
    delay: 2000,
});

ScrollReveal().reveal(".room__card", {
    ...scrollRevealOPtion,
    interval: 500,
});

ScrollReveal().reveal(".service__list", {
    ...scrollRevealOPtion,
    interval: 500,
    origin: "left"
});
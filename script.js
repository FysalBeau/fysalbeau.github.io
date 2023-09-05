//event listener for mobile nav menu
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".mob-right-nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

//detect if user is in dark-mode
const isDarkMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

//navigation element change style on scroll (ELEMENT 1)

const navElement1 = document.querySelector("#nav-home");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  root: null, //it is the viewport
  threshold: 0.5,
  // ,rootMargin: "-150px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navElement1.classList.add("nav-home-scrolled");
    } else {
      navElement1.classList.remove("nav-home-scrolled");
    }
    // console.log(entry);
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//navigation element change style on scroll (ELEMENT 2)

const navElement2 = document.querySelector("#nav-about");
const sectionTwo = document.querySelector(".about");

const sectionTwoOptions = {
  root: null, //it is the viewport
  threshold: 0.5,
};

const sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navElement2.classList.add("nav-about-scrolled");
    } else {
      navElement2.classList.remove("nav-about-scrolled");
    }
    // console.log(entry.target);
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);

//navigation element change style on scroll (ELEMENT 3)

const navElement3 = document.querySelector("#nav-projects");
const sectionThree = document.querySelector(".projects");

const sectionThreeOptions = {
  root: null, //it is the viewport
  threshold: 0.5,
};

const sectionThreeObserver = new IntersectionObserver(function (
  entries,
  sectionThreeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navElement3.classList.add("nav-projects-scrolled");
    } else {
      navElement3.classList.remove("nav-projects-scrolled");
    }
    // console.log(entry.target);
  });
},
sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);

//navigation element change style on scroll (ELEMENT 4)

const navElement4 = document.querySelector("#nav-contact");
const sectionFour = document.querySelector(".contact");

const sectionFourOptions = {
  root: null, //it is the viewport
  threshold: 0.5,
};

const sectionFourObserver = new IntersectionObserver(function (
  entries,
  sectionFourObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navElement4.classList.add("nav-contact-scrolled");
    } else {
      navElement4.classList.remove("nav-contact-scrolled");
    }
    // console.log(entry.target);
  });
},
sectionFourOptions);

sectionFourObserver.observe(sectionFour);

// fade and scroll items into view while scrolling

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.20,
  // rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

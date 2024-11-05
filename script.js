// Burger Menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
var startButton = document.getElementById("start");
var start = document.getElementById("start-now");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});


// Gsap Animations
gsap.from("#companies", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#companies",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("#expertise", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#expertise",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("#commitments", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#commitments",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("#our-work", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#our-work",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("partner-us", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "partner-us",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("#elevate", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#elevate",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from("#methodology", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#methodology",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

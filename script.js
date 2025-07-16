gsap.registerPlugin(ScrollTrigger);

gsap.to("#left-column", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: "#left-column",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#right-column", {
  y: 200,
  ease: "none",
  scrollTrigger: {
    trigger: "#right-column",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#left-column", {
  y: -200,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: "#left-column",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#right-column", {
  y: 200,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: "#right-column",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

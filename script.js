let gl = document.getElementById('gallery')
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

gsap.to('#aboutHeading', {
  y: -500,
  display: 'hidden',
})

gsap.from("#aboutHeading", {
  y: 0,
  ease: "ease-in-out",
  duration: 1,
  display: 'block',
});

gsap.to(gl, {
  y: -500,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: "#gallery",
    start: "top bottom",
    end: "bottom top",
    duration: 5,
    scrub: true,
  },
});

gsap.to('#heading', {
  transform: 'translateX(-30%)',
  scrollTrigger: {
    trigger: '#headingAnimation',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
})

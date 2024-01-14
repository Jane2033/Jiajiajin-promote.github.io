gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out"} });
    tl.from(".shop-name", { x: -100 })
      .from(".hero-title", { x: -100 }, "<")
      .from(".intro-text", { x: -100 }, "<")
      .from(".img-cta", { x: -100 }, "<")
      .from(".reservestep",{y: 100}, "<");

      gsap.from(".about", {
        scrollTrigger: {
          trigger: ".about",
          start: "top center",
        },
        opacity: 0,
        y: 200,
      });

      gsap.from(".products", {
        scrollTrigger: {
          trigger: ".products",
          start: "top center",
        },
        opacity: 0,
        y: 200,
      });


let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".benefit-left",
      pin: true,
      start: "top top",
      endTrigger: ".benefit-right-3",
      end: "top top",
      scrub: 1,
    },
  });

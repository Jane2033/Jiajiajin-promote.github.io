/*
function splitScroll(){
    const controller = new scrollMagic.Controller();

    new scrollMagic.Scene({
        duration: '200%',
        triggerElement: '.benefit-left',
        triggerHook: 0,
    })
    .setPin('.benefit-left')
    .addIndicators()
    .addTo(controller);
}

splitScroll();

*/

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".benefit-left",
      pin: true,
      start: "top top",
      endTrigger: ".benefit-right-3",
      end: "top top",
      scrub: 1,
    },
  });
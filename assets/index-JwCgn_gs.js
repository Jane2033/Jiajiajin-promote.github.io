(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();gsap.registerPlugin(ScrollTrigger);var n=gsap.timeline({defaults:{duration:1,ease:"power1.out"}});n.from(".shop-name",{x:-100}).from(".hero-title",{x:-100},"<").from(".intro-text",{x:-100},"<").from(".img-cta",{x:-100},"<").from(".reservestep",{y:100},"<");gsap.from(".about",{scrollTrigger:{trigger:".about",start:"top center"},opacity:0,y:200});gsap.from(".products",{scrollTrigger:{trigger:".products",start:"top center"},opacity:0,y:200});gsap.timeline({scrollTrigger:{trigger:".benefit-left",pin:!0,start:"top top",endTrigger:".benefit-right-3",end:"top top",scrub:1}});new Swiper(".swiper-content",{slidesPerView:3,spaceBetween:100,rewind:!0,grabCursor:"true",navigation:{nextEl:".myswiper-button-next",prevEl:".myswiper-button-prev"},breakpoints:{280:{slidesPerView:1,spaceBetween:50},320:{slidesPerView:1,spaceBetween:50},640:{slidesPerView:2,spaceBetween:50},768:{slidesPerView:3,spaceBetween:50}}});
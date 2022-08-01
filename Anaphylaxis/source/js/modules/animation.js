import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 150;
  if(elem.classList.contains("reveal-in-left")) {
    x = -150;
    y = 0;
  } else if (elem.classList.contains("reveal-in-right")) {
    x = 150;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 5.0,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal-in").forEach(function(elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) }
    });
  });
});

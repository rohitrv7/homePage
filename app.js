let menu = document.querySelector(".menu");
let link = document.querySelector(".linkMobile");
let close = document.querySelector(".close");

let tl = gsap.timeline();

function navbar() {
  tl.to(link, {
    right: "-120",
    duration: 0.5,
  });

  tl.pause();
  menu.addEventListener("click", (e) => {
    tl.play();
  });

  link.addEventListener("click", (e) => {
    tl.reverse();
  });
}
navbar();

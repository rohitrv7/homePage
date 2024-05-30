(() => {
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
})();

function nav() {
  let tl = gsap.timeline();
  tl.from("nav .logo", {
    y: -50,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".link a", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
  });
}
nav();

function home() {
  let tl = gsap.timeline();
  tl.from(".home h1", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
  });
  tl.from(".home p", {
    x: -50,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".content button", {
    y: 50,
    opacity: 0,
    duration: 0.2,
  });
}
home();


// let tl = gsap.timeline()
// tl.from(".aboutimg img",{
//     x: -100,
//     opacity: 0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".aboutPage",
//         start:"top center",
//         end: "-100%",
//         marker: true,
//         scrub: true
//     }
// },"a")
// tl.from(".aboutPage h1",{

// })
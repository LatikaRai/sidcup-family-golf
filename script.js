VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.6,
});

const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    left: dets.x,
    top: dets.y,
    duration: 0.5,
    ease: "power2.out",
  });
  gsap.to(cursorBlur, {
    left: dets.x - 200,
    top: dets.y - 200,
    duration: 0.5,
    ease: "power2.out",
  });
});

gsap.to("nav", {
  backgroundColor: "#000",
  height: "10vh",
  duration: 0.4,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000000e9",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -70%",
    scrub: 3,
  },
});

gsap.from(".about-us-content img, .about-us-content .about-us-detail", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-us-page",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.from(".card-cont .card", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card-cont",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 60%",
    scrub: 3,
  },
});

gsap.from(".review p", {
  y: 90,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".review",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from(".review .quote-left", {
  y: -20,
  x: -20,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".review",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from(".review .quote-right", {
  y: 20,
  x: 20,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".review",
    scroller: "body",
    // markers: true,
    start: "top 30%",
    end: "top 70%",
    scrub: 2,
  },
});

// service page
const serviceCard = document.querySelectorAll(".service-cards");
serviceCard.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 4,
      backgroundColor: "transparent",
      border: "0.5px solid white",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
      backgroundColor: "#A0BF2B",
      border: "none",
    });
  });
});

gsap.from(".services h3", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".services",
    scroller: "body",
    // markers: true,
    start: "top 95%",
    end: "top 50%",
    scrub: 2,
  },
});

// footer
function cursorAnimation(elements) {
  const items = document.querySelectorAll(elements);
  items.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 4,
        backgroundColor: "transparent",
        border: "0.5px solid white",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#A0BF2B",
        border: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}
cursorAnimation(".socials i");
cursorAnimation(".services-links h3");
cursorAnimation(".details h3");
cursorAnimation(".location h3");
cursorAnimation("nav h4");

// food n drink
    let start = 0
  const images = [
    "./assets/images/cafe-about-1.jpg",
    "./assets/images/cafe-about-2.jpg",
    "./assets/images/cafe-about-3.webp",
  ];
  const foodImg = document.querySelector(".food-img")
  function carousel(){
    start = (start+1) % images.length
  }
  setInterval(carousel, 2000)


  gsap.from(".image, .food-content h2, .food-content p, .food-content button", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".food-n-drink",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 50%",
    scrub: 3,
  },
});

VanillaTilt.init(document.querySelectorAll("[data-tilt]"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.6
})

const cursor = document.querySelector("#cursor")
const cursorBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x - 150 +"px"
    cursorBlur.style.top = dets.y - 150+"px"
})

 gsap.to("nav", {
    backgroundColor: "#000",
    height: "10vh",
    duration: 0.4,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
}) 

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%",
        scrub: 3
    }
})
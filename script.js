let navanimation=gsap.timeline();
navanimation.from("#nav-img",{
    y:-30,
    opacity:0,
    duration:1,
})
navanimation.from("nav ul li",{
    opacity:0,
    // duration:1,
    y:-30,
    stagger:0.3
})
// nav animation done

navanimation.from("#heru .heru-container .heru-text-part h1",{
    opacity:0,
    x:-100,

},"-=1") 

navanimation.from("#heru .heru-container .heru-text-part p",{
    opacity:0,
    x:-100,

},'2')

























// scroling smooth here=========================
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
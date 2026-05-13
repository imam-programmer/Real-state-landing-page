let navanimation=gsap.timeline();
navanimation.from("#nav-img",{
    y:-30,
    opacity:0,
    duration:0.4,
})
navanimation.from("nav ul li",{
    opacity:0,
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
navanimation.from("#heru .heru-container .input-container ",{
    opacity:0,
    x:-100,

},)
navanimation.from("#heru-im",{
    x:100,
    opacity:0,
    duration:2
},"-=2")
// =================banner done=====================

let Tahapananimation=gsap.timeline({
    scrollTrigger:{
        trigger:"#Tahapan",
        scroller:"body",
        start:"top 30%",
        end:"top 0",
        // scrub:2
        
    }
})
Tahapananimation.from("#Tahapan h2",{
    y:100,
    duration:1,
    opacity:0,
})
Tahapananimation.from("#Tahapan .card",{
    opacity:0,
    y:-100,
    duration:1,
    stagger:0.5,  
})

























// scroling smooth here=========================
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
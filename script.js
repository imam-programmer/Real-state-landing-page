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

// =================card part end


let Favoritanimation=gsap.timeline({
    scrollTrigger:{      
        trigger:"#Favorit",
        scroller:"body",
        start:"top 30%",
    }
})
Favoritanimation.from("#Favorit h5",{
    y:-100,
    opacity:0,
    duration:1
})
Favoritanimation.from("#Favorit #id",{
    y:-100,
    opacity:0,
    duration:1
})
Favoritanimation.from(".Favorit-image-part",{
    x:-200,
    opacity:0,
    duration:1
},"-=1")
Favoritanimation.from(".Favorit-text-part",{
    x:200,
    opacity:0,
    duration:1
},"-=1")

// ==========================favorit part done============

let Berbagaianimation=gsap.timeline({
      scrollTrigger:{      
        trigger:"#Berbagai",
        scroller:"body",
        start:"top 40%",
    }
})
Berbagaianimation.from("#Berbagai h5",{
    x:500,
    opacity:0,
    duration:1.1
})
Berbagaianimation.from("#Berbagai h2",{
    x:-500,
    opacity:0,
    duration:1.1
})
Berbagaianimation.from("#Berbagai img,#Berbagai  h4,#Berbagai  p",{
    x:500,
    duration:1,
    opacity:0,
    stagger:0.5
})
// ================

let Penghargaan=gsap.timeline({
       scrollTrigger:{      
        trigger:"#Penghargaan",
        scroller:"body",
        start:"top 60%",
    }
});
Penghargaan.from("#Penghargaan #P-h2",{
    y:-100,
    opacity:0,
    duration:0.7
})
Penghargaan.from("#Penghargaan .card-part .card",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:-0.3
})
Penghargaan.from("#Penghargaan .img-part h2",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:-0.3
},"-=1")
Penghargaan.from("#Penghargaan .img-part img",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:-0.3
},)
Penghargaan.from("footer img",{
    x:-200,
    opacity:0,
    duration:1,
},)
Penghargaan.from("footer li",{
    x:100,
    opacity:0,
    duration:0.7,
    stagger:-0.3
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
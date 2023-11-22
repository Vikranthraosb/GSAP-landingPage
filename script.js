var t1= gsap.timeline()

t1.from("#logo,.nav h3,.nav h4,.nav button",{
    y:-100,
    duration:.8,
   opacity:0,
    stagger:.2
})

t1.from(".main h1",{
    y:100,
    stagger:.2,
    opacity:0,
})
t1.from("#img1, #img2",{
    scale:0,
    opacity:0,
    stagger:.2
})
t1.to(".scroldown",{
    opacity:1,
y:20,
repeat:-1,
yoyo:true,
duration:.7
})
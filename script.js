var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 97%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to(".fanta",{
    top:"120%",
    left: "0%",
},'orange')

tl.to(".orange2",{
    top:"160%",
    left: "23%",
},'orange')


tl.to(".orange",{
    width:"15%",
    top:"160%",
    right: "10%",
},'orange')

tl.to(".leaf",{
    // width:"15%",
    top:"110%",
    left: "80%",
},'orange')

tl.to(".leaf2",{
    // width:"15%",
    top:"110%",
    left: "0%",
},'orange')


// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger: "#three",
//     start: "0% 97%",
//     end: "70% 50%",
//     scrub: true,
//     markers: true,
// }})

// tl2.from(".lemon1",{
//     rotate: "-90deg",
//     left: "-50%",
//     top:"110%",
// })

// tl2.to("#cocacola",{

// })
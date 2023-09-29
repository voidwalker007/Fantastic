gsap.set("#leaf-1",{
    x:"-100%",
   width:"10%",
   rotate:"-60deg"
})
gsap.to("#leaf-1",{
    x:"10%",
    duration:"2",
    width:"20%",
    rotate:"60deg"
})
 



 

gsap.to("#leaf-3",{
 
    duration:"2",
    width:"20%",
    rotate:"5deg",
    repeat:-1,
 
    ease:"linear",
    yoyo:true
})
gsap.to("#leaf-2",{
 
   duration:5,
    rotate:"-10deg",
    repeat:-1,
  
    ease:"linear",
    yoyo:true
})







var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"5% 95%",
    end:"40% 50%",
    scrub:true,
    markers:false,
}}) 
tl.to("#fanta-img",{
    x:"-70%",
    y:"160%",
    ease:"linear",
   
},"animate1")

tl.to("#fanta-orange2",{
    x:"-70%",
    y:"380%",
    rotate:"70deg",
},"animate1")


tl.to("#orange-set",{
    x:"150%",
    y:"320%",

    width:"15%"
},"animate1")

tl.to("#leaf-2",{
    x:"-50%",
    y:"170%",

    rotate:"70deg",
    width:"15%"
},"animate1")


var tlDivThree= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"35% 95%",
    end:"70% 70%",
    scrub:true,
    markers:false,
}}) 



 tlDivThree.from(".lemon-left",{
    x:"-160%",
    y:"-30%",

    rotate:"240deg",
  
},"animate2") 

tlDivThree.from(".card-img-left",{
    x:"-100%",
    y:"50%",

    rotate:"-70deg",
  
},"animate2") 


tlDivThree.from(".lemon-right",{
    x:"160%",
    y:"-30%",

    rotate:"240deg",
  
},"animate2") 

tlDivThree.to("#fanta-img",{
    x:"3%",
    y:"345%",
   width:"38%",
    rotate:"360deg",
  
},"animate2") 
tlDivThree.to("#fanta-orange2",{
    x:"67%",
    y:"530%",
  
    rotate:"360deg",
  
},"animate2") 



tlDivThree.from(".card-img-right",{
    x:"100%",
    y:"50%",

    rotate:"70deg",
  
},"animate2") 

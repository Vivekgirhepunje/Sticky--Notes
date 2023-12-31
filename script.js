let cls=["rgba(128, 255, 0, 0.818)","rgba(255, 192, 203, 0.814)","rgba(135, 206, 250, 0.844)","rgb(172, 77, 172)"]
let deg=[5,-5,0];
function randomcls(){
    let num= Math.floor(Math.random()*4);
    return cls[num];
}
function randomdeg(){
   let num= Math.floor(Math.random()*3);
   return deg[num];
}

let main= document.querySelector("#main");
// console.log(main)
let box=document.querySelector("#box-add");
// console.log(box);
let notetext=document.querySelector("#note-text");
box.addEventListener("click",()=>{
    notetext.style.display="block";
})
let text= document.querySelector("textarea");

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(text.value);
    degvalue=randomdeg();
    let newbox= document.createElement("div");
    newbox.classList.add("box");
    newbox.innerHTML=`<img id="pin" src="./push-pin-icon-14.png" alt="">
    <p>${text.value}</p>`;
    newbox.style.backgroundColor= randomcls();
    let img= newbox.querySelector("img");
    // newbox.style.transform=`rotate(${degvalue}deg)`;
    if(degvalue===5){
        img.style.alignSelf="flex-start";
    }
    else if(degvalue===0){
        img.style.alignSelf="center";
    }
    else{
        img.style.alignSelf="flex-end";
    }
    // console.log(newbox)
    main.append(newbox);

    setTimeout(() => {
        if(degvalue===0){

            gsap.from("#main >div:last-child",{
                transform:"rotate(-2deg)",
                transformOrigin:"top center",
                duration:1.5,
                repeat:2,
    transition:"all ease-in-out 0.1s",

                yoyo:"true"
            })
        }
        else if(degvalue===5){
        
                gsap.to("#main >div:last-child",{
                    transform:"rotate(4deg)",
                    transformOrigin:"top left",
                    duration:1,
                    repeat:2,
                    yoyo:"true",
    // transition:"all ease-in-out 0.1s"

                    // transition:"all linear 2s"
                })
            }
        else{
            gsap.to("#main >div:last-child",{
                transform:"rotate(-4deg)",
                transformOrigin:"top right",
                duration:1,
                repeat:2,
                yoyo:"true",
                // transition:"all ease-in-out 0.1s"

                // transition:"all linear 2s"
            })
        }
    }, 100);
    text.value="";
    notetext.style.display="none";
})

// code to remove the box on double click with classes 
setTimeout(() => {
    main.addEventListener("dblclick",(e)=>{
        if (e.target.classList.contains("box")) {
            e.target.remove();
          }
     })
},0);


// gsap animation for + sign

gsap.from("#bx-add i",{
    scale:0.5,
    duration:1,
    repeat:-1,
    yoyo:"true",
    transition:"all ease-in-out 0.1s"
})

var rule = CSSRulePlugin.getRule("#bx-add::before");
gsap.to(rule, {
    y:-60,
    duration: 1, 
    repeat: -1,
    yoyo: true,
    stagger:true,
    color:"black",
  });
var clicktext= CSSRulePlugin.getRule("form input");
 gsap.from("form input",{
    opacity:0,
    duration:1.5,
    repeat: -1,
    yoyo:"true"
 })
var tl= gsap.timeline();
tl.to("body #loader h1",{
   scale:1.2,
   duration:1,
    
})
tl.to("body #loader",{
    duration:2,
    y:"-100vh",
    opacity:0,
    background:"transparent",
 })
tl.from("#box-add #bx-t1",{
    duration:1,
    transform: "rotate(0deg) translateX(0)"
},"cards")
tl.from("#box-add #bx-t2",{
    duration:1,
    transform: "rotate(0deg) translateX(0)"
},"cards")
tl.from("#box-add #bx-t3",{
    duration:1,
    transform: "rotate(0deg) translateX(0)"
},"cards")
tl.from("#box-add #bx-t4",{
    duration:1,
    transform: "rotate(0deg) translateX(0)"
},"cards")


// think about moving animation for for 2 repat 
console.log(document.querySelector("#main div:last-child"))
// document.addEventListener("DOMContentLoaded", function() {
//     console.log(document.querySelector("#main div:last-child"));
// });

// for custom cursor 
var cursor= document.querySelector("#crsr");
window.addEventListener("mousemove",(e)=>{
    cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
})

let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
let color =true;
let originaltext =box1.innerText;;
box2.addEventListener("mouseenter",()=>{ 
    console.log("mouse enter"); 
    if(color){
        box2.style.backgroundColor="red";
        color=false;
    }
    else{ 
       box2.style.backgroundColor="green";
        color=true; 
    } 
});
 box2.addEventListener("mouseleave",()=>{ 
    console.log("mouse ");  
    box2.style.backgroundColor="";
});


box1.addEventListener("mouseenter",()=>{ 
    let r =Math.floor(Math.random()*50);
    box1.innerHTML= `<h1> ${r}</h1>`;
});
box1.addEventListener("mouseleave",()=>{
    box1.innerHTML=`<h1>${originaltext}</h1>`;
})


function randomcolor(){
    const r=Math.floor(Math.random()*256) ;
    const b=Math.floor(Math.random()*256) ;
    const g=Math.floor(Math.random()*256) ;
    return `rgb(${r},${b},${g})`;
}


box3.addEventListener("mouseenter",()=>{
   box3.style.backgroundColor= randomcolor();
});
box3.addEventListener("mouseleave",()=>{
   box3.style.backgroundColor= "";
});

box4.addEventListener("click",()=>{
    box2.style.backgroundColor= randomcolor();
    box3.style.backgroundColor= randomcolor();
    box1.style.backgroundColor= randomcolor();

})
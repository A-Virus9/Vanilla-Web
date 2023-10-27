let i=1;
const prev= document.querySelector("#prev");
const next= document.querySelector("#next");
const progcirs=document.querySelectorAll(".progcir");
const lines=document.querySelectorAll(".line .num");
prev.classList.add("disabled");
prev.addEventListener("click",()=>{
    i--;
    (i<1)? i=1:1;
    update();
});
next.addEventListener("click",()=>{
    i++;
    (i>5)? i=5:1;
    update();
});
update = () => {
    progcirs.forEach( (circle, yo) => {
        if(yo < i){
            circle.style.border="4px solid rgba(98, 194, 211, 0.925)";
        }else{
            circle.style.border="4px solid rgba(128, 128, 128, 0.37)";
        }
    } );
    lines.forEach( (line, hi)=>{
        console.log(hi+1);
        if((hi+1)< i){
            line.style.width="60px";
        }else{
            line.style.width="0px";
        }
    });
    (i==5)? next.classList.add("disabled"):next.classList.remove("disabled");
    (i==1)? prev.classList.add("disabled"):prev.classList.remove("disabled");
}
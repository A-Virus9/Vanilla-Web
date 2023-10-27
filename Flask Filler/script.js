const full=document.querySelector("#full");
const empty=document.querySelector("#empty");
const rem=document.querySelector("#rem");
const small=document.querySelectorAll(".scont");
let fullheight=0,emptyheight,remv=2,fullv=0;
small.forEach((flask)=>{
    flask.addEventListener("click",()=>{
        if(!flask.classList.contains("active")){
            fullheight+=(450/8);
            remv-=0.25;
            fullv+=12.5;
            update();
            flask.classList.add("active");
        }
        else{
            fullheight-=(450/8);
            remv+=0.25;
            fullv-=12.5;
            update();
            flask.classList.remove("active");
        }
    });
});
update = () =>{
    emptyheight=450-fullheight;
    empty.style.height=`${emptyheight}px`;
    full.style.height=`${fullheight}px`;
    rem.innerText=remv+"L";
    full.innerText=fullv+"%";
    full.style.color= (fullv==0)? "white":"rgba(0, 0, 255, 0.774)";
}
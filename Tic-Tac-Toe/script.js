const grid=document.querySelectorAll(".gridpart");
const winst=document.querySelector("#line");
const text=document.querySelector("#update");
const reset=document.querySelector("#reset");
const scoreX=document.querySelector("#scoreX");
const score0=document.querySelector("#score0");
const resets=document.querySelector("#resets");
let i=0,winstate=0,X=0,O=0,tempX,tempO;

yo = () =>{
  let win = [
    [0, 1, 2, 280, 20, 259, 0],
    [3, 4, 5, 167, 20, 259, 0],
    [6, 7, 8, 55, 20, 259, 0],
    [0, 3, 6, 165, -92, 280, 90],
    [1, 4, 7, 165, 9, 280, 90],
    [2, 5, 8, 165, 111, 280, 90],
    [0, 4, 8, 167, 0, 500, 47],
    [2, 4, 6, 167, 0, 500, -47]
  ];
  tempX=X;
  tempO=O;
  win.forEach((wc) => {
    if(
      grid[wc[0]].innerText === grid[wc[1]].innerText &&
      grid[wc[1]].innerText === grid[wc[2]].innerText &&
      grid[wc[0]].innerText !== ""
    ){
      winst.style.bottom = `${wc[3]}px`;
      winst.style.left = `${wc[4]}px`;
      winst.style.width = `${wc[5]}px`;
      winst.style.transform = `rotate(${wc[6]}deg)`;
      text.innerText= grid[wc[0]].innerText+" Wins!!";
      text.style.color= (grid[wc[0]].innerText=="X")? "rgba(0, 153, 255, 0.904)" : "rgba(255, 0, 0, 0.637)";
      winstate=1;
      if(grid[wc[0]].innerText=="X"){
        X+=1;
      }
      else{
        O+=1;
      }
    }
  });
  (X==tempX+2)? X-=1:1;
  (O==tempO+2)? O-=1:1;
  scoreX.innerText=`X-score: ${X}`;
  score0.innerText=`O-score: ${O}`;
}

yum = () =>{
  let filledCount = 0;
  for (let i = 0; i < grid.length; i++){
    if (grid[i].classList.contains("filled") && winstate == 0) {
      filledCount++;
    }
  }
  if (filledCount === 9) {
    text.innerText = "It's a Tie!!";
    text.style.color = "rgba(115, 39, 138, 0.644)";
    winstate = 1;
  }
}

grid.forEach((gp, index)=>{
  gp.addEventListener("click",()=>{
    if(!gp.classList.contains("filled") && winstate==0){
      if(i%2==0){
        text.style.color="rgba(255, 0, 0, 0.637)";
        text.innerText="0's Turn";
        gp.innerText="X";
        gp.style.color="rgba(0, 153, 255, 0.904)";
        gp.classList.add("filled");
      }
      else{
        text.style.color="rgba(0, 153, 255, 0.904)";
        text.innerText="X's Turn";
        gp.innerText="0";
        gp.style.color="rgba(255, 0, 0, 0.637)";
        gp.classList.add("filled");
      }
      i++;
      yo();
      yum();
    }
  });
});

reset.addEventListener("click",()=>{
  i=0;
  winstate=0;
  grid.forEach((hi)=>{
    hi.innerText="";
    hi.classList.remove("filled");
  });
  winst.style.width="0";
  text.style.color="rgba(0, 153, 255, 0.904)";
  text.innerText="X's Turn";
});

resets.addEventListener("click",()=>{
  i=0;
  winstate=0;
  grid.forEach((hi)=>{
    hi.innerText="";
    hi.classList.remove("filled");
  });
  winst.style.width="0";
  text.style.color="rgba(0, 153, 255, 0.904)";
  text.innerText="X's Turn";
  X=0;
  O=0;
  scoreX.innerText=`X-score: ${X}`;
  score0.innerText=`O-score: ${O}`;
});
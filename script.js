let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;
 
const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
 ]
 const resetgame = () =>{
     turn=true;
     enablebox();
     msgcontainer.classList.add("hide");
 }
 boxes.forEach((box) => {
     
     box.addEventListener("click",() => {
         if(turn)
         {
             box.innerText="O";
             turn=false;
         }
         else{
            box.innerText="X";
           turn=true;
         }
         
         box.disabled=true;
         
         checkwinner();
     });
 });
 
 const disablebox = () =>{
     for(let box of boxes)
     {
         box.disabled=true;
     }
 }
 
 const enablebox = () =>{
     for(let box of boxes)
     {
         box.disabled=false;
         box.innerText="";
     }
 }
 
  const showwinner = (winner)=>{
      msg.innerText=`WINNER IS ${winner}`;
      msgcontainer.classList.remove("hide");
      disablebox();
  }
 const checkwinner = () =>{
     for(patten of winpatterns)
     {
        let pos1 = boxes[patten[0]].innerText;
        let pos2 = boxes[patten[1]].innerText;
        let pos3 = boxes[patten[2]].innerText;
        if(pos1 !="" && pos2 
        !=""&& pos3!="")
      {
          if(pos1===pos2 && pos2===pos3)
          {
            showwinner(pos1);
          }
      }
    }
 }
 
 newBtn.addEventListener("click",resetgame);
 resetBtn.addEventListener("click",resetgame);
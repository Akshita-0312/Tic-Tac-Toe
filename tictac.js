let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count  = 0;
let turnO = true; //If it is true then O come
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was Clicked");
        if(turnO){
            box.innerText = "O";
            box.classList.add("rd");
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("blk");
            turnO = true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner = () =>{
   for(let pattern of winPatterns){
   let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val = boxes[pattern[1]].innerText;
   let pos3Val= boxes[pattern[2]].innerText;
   if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
            
        }
   }
}
if(count==9){
    msg.innerText="Game is Draw";
    msgContainer.classList.remove("hide");
}
}

const showWinner = (pos1Val) =>{
    msg.innerText =`Congratulation, Winner is ${pos1Val}`;
    count =0;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
let boxes = document.querySelectorAll(".box");
let turnX = true;
let msgDiv = document.querySelector(".msg-modal");
let msg = document.querySelector("h1");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let cancelBtn = document.querySelector("#cancel");
let count = 0 ; 

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText = "X";
            box.style.color = "#C14953";
            turnX = false;
            count = count+1;
        }else{
            box.innerText = '0';
           box.style.color = "#4C4C47"
            turnX = true;
            count = count+1;
        }
        box.disabled = true;
        if(checkwinner()){
            
        }else if(count === 9){
            msgDiv.style.display = "flex";
            msg.innerText = 'The Game is Draw';
            disableBtn();
        }
        
    })
})

 const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

 const resetGame = ()=>{
    turnX = true;
    enableBtn();
    count = 0;
    }

const checkwinner = ()=>{
   for(let pattern  of winPattern){
   let pos1 = boxes[pattern[0]].innerText;
   let pos2 = boxes[pattern[1]].innerText;
   let pos3 =  boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos2 != "" ){
        if(pos1 ===pos2 && pos2=== pos3){
            msgDiv.style.display = "flex";
            msg.innerText = `The winner is ${pos1}`;
            disableBtn();
        }
    }
   }
}

reset.addEventListener("click",()=>{
    resetGame();
});

newGameBtn.addEventListener("click",()=>{
    resetGame();

    msgDiv.style.display = "none";

});

cancelBtn.addEventListener("click",()=>{
    msgDiv.style.display = "none";

});
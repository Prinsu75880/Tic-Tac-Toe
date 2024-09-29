let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".hide");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 6, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    enaleBoxes();
    msgContainer.classList.add("hide");
}


const enaleBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        turnO = true;
    }
}


const disaleBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner = (pos1Val) => {
    msg.innerText = `Winner is ${pos1Val}`;
    msgContainer.classList.remove("hide");
    disaleBoxes();
   
}

const checkWinner = () => {
 for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText

 if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val);
    }
 }

}
    
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }else {
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
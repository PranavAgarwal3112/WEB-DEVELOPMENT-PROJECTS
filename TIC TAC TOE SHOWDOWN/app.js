let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let new_btn = document.querySelector(".new-btn");
let msg_container = document.querySelector(".msg");
let msg = document.querySelector(".msg1");


let turno = true;
let count=0;
const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerHTML = "o"
            turno = false;
        }
        else {
            box.innerHTML = "x";
            turno = true;
        } box.disabled = true;
count++;
checkwinner();

let iswinner = checkwinner();
       if(count===9 && !iswinner){
        gamedraw();
       }
    })

});

const gamedraw=()=>{
    msg.innerHTML=`Game was draw`;
    msg_container.classList.remove("hide");
    disableboxes();
}
const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations winner is ${winner}`;
    msg_container.classList.remove("hide")
}
const checkwinner = () => {
    for (pattern of winpatterns) {
        // console.log(
        //     boxes[pattern[0]],
        //     boxes[pattern[1]],
        //     boxes[pattern[2]]
        // );
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                disableboxes();
                showWinner(pos1val);
                return true;
            }
        }
    }
}

const resetgame = () => {
    turno = true;
    count = 0;
    enableboxes();
    msg_container.classList.add("hide")
}

reset_btn.addEventListener("click", resetgame)
new_btn.addEventListener("click", resetgame) 
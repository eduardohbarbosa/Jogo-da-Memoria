const emoji = ["😛","😛","🙄","🙄","😎","😎","😍","😍","🐭","🐭","🦄","🦄","🐵","🐵","😴","😴"];
let openCards = [];

console.log(emoji)

let shuffleEmojis = emoji.sort(() => (Math.random() > 0.5 ? 2 : -1))

console.log(emoji)

for(let i = 0; i < emoji.length; i++){
    let box = document.createElement('div');
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}


function handleClick(){
    if(this.classList.contains("boxOpen")){
        return
    }

    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

        openCards[0].style.backgroundColor = "green";
        openCards[1].style.backgroundColor = "green";
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []

    if(document.querySelectorAll(".boxMatch").length === emoji.length){
        alert("Você venceu")
    }
}
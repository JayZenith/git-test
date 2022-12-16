

function divGrid(k){
    for(let i = 0; i < k; i++){
        let div = document.createElement('div');
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = "white";
        div.style.border = "0px solid black";
        div.addEventListener("mouseover", (event) => {
            div.style.background = "black";
        });
        document.getElementById("main").appendChild(div);
    }
}

function okd(k){
    let nodes = document.getElementById("main").childNodes;
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].nodeName.toLocaleLowerCase() == `div`){
            nodes[i].style.background = "white";
        }

    }
}

let userInput = prompt(`Enter amount of divs`);
let i = userInput;
divGrid(i);
const reset = document.getElementById("btn");
reset.addEventListener("click", okd);

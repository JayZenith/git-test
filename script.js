

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

function clearFunction(k){
    let nodes = document.getElementById("main").childNodes;
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].nodeName.toLocaleLowerCase() == `div`){
            nodes[i].style.background = "white";
        }

    }
}

function resetFunction()
{
    while(document.getElementById("main").firstChild)
        document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    let userInput = prompt('Enter amount of divs');
    divGrid(userInput);
}


let userInput = prompt('Enter amount of divs');
divGrid(userInput);
const clearBtn = document.getElementById("btn");
clearBtn.addEventListener("click", clearFunction);
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetFunction);



function divGrid(k){
    for(let i = 0; i < (k*k); i++){
        let div = document.createElement('div');
        div.style.width = "10px";
        /*div.style.height = "10px";*/
        div.style.height = "5px";

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
    same();
}


function same()
{
    userInput = prompt('Enter amount of divs');
    main = document.getElementById("main");
    main.style.setProperty('grid-template-columns', `repeat(${userInput}, 10px)`);
    /*main.style.setProperty('grid-template-rows', `repeat(${userInput}, 10px)`);*/
    main.style.setProperty('grid-template-rows', `repeat(${userInput}, 5px)`);
    /*heightMain = parseInt(userInput) * 10;*/
    heightMain = parseInt(userInput) * 5;
    widthMain = parseInt(userInput) * 10;
    console.log(heightMain.toString());
    main.style.height = heightMain.toString() + "px";
    main.style.width = widthMain.toString() + "px";
    divGrid(userInput);
}

let userInput, main, heightMain, widthMain;
same();
const clearBtn = document.getElementById("btn");
clearBtn.addEventListener("click", clearFunction);
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetFunction);

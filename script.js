

function divGrid(k){
    for(let i = 0; i < k; i++){
        const div = document.createElement('div');
        div.style.width = "80px";
        div.style.height = "80px";
        div.style.background = "white";
        div.style.border = "1px solid black";
        div.addEventListener("mouseover", (event) => {
            div.style.background = "black";
        });
        document.getElementById("main").appendChild(div);
    }
}




let i = 100;
divGrid(i);
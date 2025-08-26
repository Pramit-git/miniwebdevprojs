const myBox = document.getElementById("box")
const  move = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch (event.key){
            case "ArrowUp":
                y = y-move;
                break;
            case "ArrowDown":
                y = y+move;
                break;
            case "ArrowLeft":
                x = x-move;
                break;
            case "ArrowRight":
                x = x+move; 
                break;  
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
document.addEventListener("keydown",event =>{
    myBox.textContent = "😘";
    myBox.style.backgroundColor = "yellow";
});
document.addEventListener("keyup",event =>{
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "aqua";
});
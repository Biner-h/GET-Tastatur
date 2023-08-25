const textInput = document.getElementById('textInput');

function letterPushed(letter){
    textInput.innerHTML += letter;
}

function letterRemove(){
    textInput.innerHTML = textInput.innerHTML.slice(0, -1);
}
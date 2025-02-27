function generateHexCode(){
    const choices = "0123456789ABCDEF";
    let hexCode = '#';
    for(let i = 0; i < 6; i++){
        let idx = Math.floor(Math.random() * 16)
        hexCode += choices[idx];
    }
    return hexCode;
}

let ref;

function startChangingColor(){
    if(ref == null){
        ref = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = generateHexCode();
    }
}

function stopChangingColor(){
    clearInterval(ref);
    ref = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor);
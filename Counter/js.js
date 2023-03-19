var btn = document.querySelectorAll(".btn");
var numTxt = document.querySelector("#numTxt");
var number = 0;

function numberText(){
    numTxt.textContent = number;
}

function numColor(){
    let num = number;
    if(num > 0){
        numTxt.style.color = "green"
    }
    else if(num < 0){
        numTxt.style.color = "red";
    }
    else {
        numTxt.style.color = "black";
    }
}

btn.forEach(function(selBtn) {
    selBtn.addEventListener("click", function() {
        var idBtn = this.id;
        if(idBtn == "menos"){
            number--;
            numColor()
        }
        else if(idBtn == "reset"){
            number = 0;
            numTxt.style.color = "black";
        }
        else if(idBtn == "mais") {
            number++;
            numColor()
        }
        numTxt.textContent = number;
        
    });
});

window.onload = numberText();
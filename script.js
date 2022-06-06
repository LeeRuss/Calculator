var firstNumber;
var secondNumber;
var currentNumber=1;
var numberButtons = document.getElementsByClassName("number-button");
var operationButtons = document.getElementsByClassName("operation-button");
var equalsButton = document.getElementById("equals-button");
var calculatorDisplay = document.getElementById("calculator-display");

initCalc();

function initCalc(){
    for(var i=0; i<numberButtons.length; ++i){
        numberButtons[i].addEventListener("click", function(){
            
        })
    }

    for(var i=0; i<operationButtons.length; ++i){
        operationButtons[i].addEventListener("click", function(){
            console.log(this.value);
        })
    }
    
    equalsButton.addEventListener("click", function(){
        console.log(this.value);
    })

}

function swapCurrentNumber(){
    if()
}
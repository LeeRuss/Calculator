var currentNumber = "";
var lastNumber = "";
var currentOperation = "";
var lastWasEqual;
var numberButtons = document.getElementsByClassName("number-button");
var operationButtons = document.getElementsByClassName("operation-button");
var equalsButton = document.getElementById("equals-button");
var calculatorDisplay = document.getElementById("calculator-display");

initCalc();

function initCalc(){
    for(var i=0; i<numberButtons.length; ++i){
        numberButtons[i].addEventListener("click", function(){
            var containDot = (currentNumber.search(/\./) != -1);
            if(this.value != "C"){
                if(!lastWasEqual){
                    if(this.value == "."){
                        if(!containDot && currentNumber.length < 17){
                            currentNumber = currentNumber+this.value;
                        }
                    }else if(containDot && currentNumber.length < 17){
                        currentNumber = currentNumber+this.value;
                        }else if(currentNumber.length < 16){
                            currentNumber = currentNumber+this.value;
                        }
                }else{
                    currentNumber = this.value
                }      
            }else{
                currentNumber = "";
            } 
            printOnDisplay(currentNumber);
            lastWasEqual = false;
        })
    }

    for(var i=0; i<operationButtons.length; ++i){
        operationButtons[i].addEventListener("click", function(){
            if(currentOperation != ""){
                equals();
            }
            currentOperation = this.value;
            lastNumber = currentNumber;
            currentNumber = "";
            lastWasEqual = false;
        })
    }
    
    equalsButton.addEventListener("click", function(){
        equals();
        lastWasEqual = true;
    })

}

function printOnDisplay(number){
    calculatorDisplay.textContent = number;
}

function equals(){
    currentNumber = parseFloat(currentNumber);
    lastNumber = parseFloat(lastNumber);
    switch(currentOperation) {
        case "+":
          currentNumber = lastNumber + currentNumber;
          break;
        case "-":
            currentNumber = lastNumber - currentNumber;
          break;
        case "*":
            currentNumber = lastNumber * currentNumber;
          break;
        case "/":
            currentNumber = lastNumber / currentNumber;
            break;
        default: 
            break;
      }
      currentOperation = "";
      lastNumber = currentNumber.toString();
      currentNumber = currentNumber.toString();
      printOnDisplay(currentNumber);
}


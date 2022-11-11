let numberButtons = document.querySelectorAll('button');
let displayValue = 0;
let operator = '';
let previousValue = 0;
let giveAnswer = false;
let numEntered = false;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(typeof Number(button.getAttribute('id')) == 'number' && !isNaN(Number(button.getAttribute('id'))) )
        { 
           display(button.getAttribute('id'), giveAnswer);
           numEntered = true;
        }
        else if(button.getAttribute('class') == "op")
        {
            if(operator == '')
            {
                operator = button.getAttribute('id');
                if(displayValue !== 0) {
                    previousValue = displayValue;
                    displayValue = 0;
                }
            }
            else{
                let operation = operate(previousValue, operator, displayValue);
                previousValue = Number(operation);
                giveAnswer= true;
               display(operation, giveAnswer);
               operator = button.getAttribute('id');
            }
            numEntered = false;
        }
        else if(button.getAttribute('id') == '=')
        {
            let operation = operate(previousValue,operator,displayValue);
           
            if(numEntered == false)
            {alert("Enter a number plz");}
            else if(operator == '')
            {
                alert("Enter a operation next time");
                giveAnswer = false;
            }
            else if(isNaN(operation)) {
                alert("Do not divide by 0 plz");
                clearCalc();
                giveAnswer = false;
            }
            else{
                giveAnswer = true;
                previousValue = Number(operation);
                display(operation, giveAnswer);
            }
            
        }
        else if(button.getAttribute('id') == 'clear')
        {clearCalc();}
    });
});
const add = function(a, b) {
    return a+b;
}
const subtract = function(a, b){
    return a-b;
}
const multiply = function(a, b){
    return a*b;
}
const divide = function(a, b){
    let num = a/b;
    return Math.round((num + Number.EPSILON) * 100) / 100;

}
const operate = function(a, op, b){
    if(op == '/' && b == 0)
    {return 'OOPS';}

    return op == '+' ? add(a,b).toString() :
            op == '-' ? subtract(a,b).toString() :
            op == '*' ? multiply(a,b).toString() :
            op == '/' ? divide(a,b).toString() :
            'OOPS';
}
const display = function(buttonId, answer) {
    const divDisplay = document.querySelector('div');
    if(displayValue == 0 && !answer)
    {
        displayValue = Number(buttonId);
        divDisplay.textContent = displayValue;
    }
    else if(!answer)
    {
        let concatValue = displayValue.toString();
        concatValue += buttonId;
        displayValue = Number(concatValue);
        divDisplay.textContent = displayValue;
    }
    else
    {
        
        displayValue = Number(buttonId);
        giveAnswer = false;    
        divDisplay.textContent = displayValue;
        operator = '';
        displayValue = 0;
        numEntered = true;
    }
}

const clearCalc = function() {
    displayValue = 0;
    operator = '';
    previousValue = 0;
    giveAnswer = false;
    display(displayValue.toString(), giveAnswer);
}
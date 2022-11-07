let numberButtons = document.querySelectorAll('button');
let displayValue = 0;
let operator = '';
let previousValue = 0;
let giveAnswer = false;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(typeof Number(button.getAttribute('id')) == 'number' && !isNaN(Number(button.getAttribute('id'))) )
       { display(button.getAttribute('id'), giveAnswer);}
        else if(button.getAttribute('class') == "op")
        {
            operator = button.getAttribute('id');
            previousValue = displayValue;
            displayValue = 0;
        }
        else if(button.getAttribute('id') == '=')
        {
            let operation = operate(previousValue,operator,displayValue);
            giveAnswer = true;
            if(isNaN(operation)) {
                alert("Do not divide by 0 plz");
                clearCalc();
                giveAnswer = false;
            }
            else{display(operation, giveAnswer);}
            
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
    return a/b;
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
    {displayValue = Number(buttonId);}
    else if(!answer)
    {
        let concatValue = displayValue.toString();
        concatValue += buttonId;
        displayValue = Number(concatValue);
    }
    else
    {
        displayValue = Number(buttonId);
        giveAnswer = false;    
    }
    divDisplay.textContent = displayValue;
    // numberButtons = document.querySelectorAll('button');
    // numberButtons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //   if(typeof Number(button.getAttribute('id')) == 'number' && !isNaN(Number(button.getAttribute('id'))) )
    //        { display(button.getAttribute('id'));}
    //         else if(button.getAttribute('class') == "op")
    //         {
    //             operator = button.getAttribute('id');
    //             previousValue = displayValue;
    //         }
    //         else if(button.getAttribute('id') == '=')
    //         {
    //             operation = operate(previousValue,operator,displayValue);
    //             display(operation.toString());
                
    //         }
    //         else if(button.getAttribute('id') == 'clear')
    //         {clearCalc();}
    //     });
    // });
}

const clearCalc = function() {
    displayValue = 0;
    operator = '';
    previousValue = 0;
    giveAnswer = false;
    display(displayValue.toString(), giveAnswer);
}
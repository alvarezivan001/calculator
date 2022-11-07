let numberButtons = document.querySelectorAll('button');
let displayValue = 0;
let operator = '';
let previousValue = 0;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(typeof Number(button.getAttribute('id')) == 'number' && !isNaN(Number(button.getAttribute('id'))) )
       { display(button.getAttribute('id'));}
        else if(button.getAttribute('class') == "op")
        {
            operator = button.getAttribute('id');
            previousValue = displayValue;
            displayValue = 0;
        }
        else if(button.getAttribute('id') == '=')
        {
            let operation = operate(previousValue,operator,displayValue);
            display(operation.toString());
            
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
    return op == '+' ? add(a,b) :
            op == '-' ? subtract(a,b) :
            op == '*' ? multiply(a,b) :
            op == '/' ? divide(a,b) :
            'OOPS';
}
const display = function(buttonId) {
    const divDisplay = document.querySelector('div');
    if(displayValue == 0)
    {displayValue = Number(buttonId);}
    else
    {
        let concatValue = displayValue.toString();
        concatValue += buttonId;
        displayValue = Number(concatValue);
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
    display(displayValue.toString());
}
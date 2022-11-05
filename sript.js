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
const operate = function(a, b, op){
    return op == '+' ? add(a,b) :
            op == '-' ? subtract(a,b) :
            op == '*' ? multiply(a,b) :
            op == '/' ? divide(a,b) :
            'OOPS';
}
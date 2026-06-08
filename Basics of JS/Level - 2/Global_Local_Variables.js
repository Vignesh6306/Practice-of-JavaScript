
var num1 = 10; // -> Global Variable
var num2 = 30; // -> Global Variable

function Sum(){
    num1 = 20; // -> Local Variable
    console.log("The sum of two number : " + (num1 + num2));
}

Sum();

function Multiply(){
    console.log("The multipy of two number : " + num1*num2);
}

Multiply();

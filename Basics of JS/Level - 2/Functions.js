//Example-1

function Greetings(Name = "NoName"){
    console.log("Hello! " + Name + " , Welcome to JS ");
}
Greetings();
Greetings("Vicky");


//Example-2

function Sum(A, B){
    var C = A+B;
    console.log("The sum of two numbers : "+ C);
}
Sum(100,200);


//Example-3

function ValidateAge(Age){
return Age >= 18 ? "Elidgible to vote" : "Not elidgible to vote";
}
var p1 = ValidateAge(10);
console.log("The status of p1 : " + p1);

var p2 = ValidateAge(20);
console.log("The status of p2 : " + p2);


// Anonymous Fuction 

var test = function(){
console.log("No name for the function!");
}
test();


// Anonymous Fuction 2

var test2 = function(marks){

if(marks >= 65){
    console.log("Pass");
} else{
    console.log("Fail");
}

}
var m1 = test2(50);
var m2 = test2(90);

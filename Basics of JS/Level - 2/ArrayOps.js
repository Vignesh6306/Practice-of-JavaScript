var Fruits = ['Apple', 'Kiwi', 'Fig'];
console.log("Before updating : " + Fruits);


Fruits[2] = 'Orange';
console.log("Before updating : " + Fruits);


const variable = [10,20,30,40,50];

for(var i=0; i<variable.length; i++){
console.log("The value are : " + variable[i] + " At index : " + i);
}


var A = new Array("BMW", "Ford", "Benz", "Audi");
var B = new Array(1,2,3,4);
const C = new Array(A,B);

console.log(C);
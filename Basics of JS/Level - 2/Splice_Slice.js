const array = [1, 2, 3, 4, 5];
const Num = [1, 2, 3, 4, 5];
const Num2 = [10, 20, 30, 45, 55, 40, 50];


array.splice(5, 0, 6, 7); // add after 5
console.log(array);

Num.splice(4, 0, 6, 7); // add after 4 by removing 5 
console.log(Num);

array.splice(1,0); // remove the 1 and have the remaining
console.log(array);

const s = Num2.slice(0,3);
console.log(s);




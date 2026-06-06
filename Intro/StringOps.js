var FirstName = "Virat";
var LastName = 'Kohli';

console.log("The length of the First Name : " + FirstName.length);
console.log("The length of the Last Name : " + LastName.length);

console.log("The Selected Index value from the Sequence 1 : " + FirstName.slice(2,4));
console.log("The Selected Index value from the Sequence 2 : " + LastName.slice(1,4));

console.log("The selected separated value from the sequence 1 : " + FirstName.substring(0,2));
console.log("The selected separated value from the sequence 2 : " + LastName.substring(0,2));

console.log("The replaced value : " + FirstName.replace("rat", "cky"));

console.log("The sequence in Upper case : " + FirstName.toUpperCase());
console.log("The sequence in Lower case : " + LastName.toLowerCase());

console.log("The concatenated sequence : " + (FirstName.concat(LastName)));




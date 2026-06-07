var English = 90;
var Science = 85;
var Maths = 80;
var Biology = 95;
var Social = 100;
var OverAllMarks = 500;

var Total = English + Science + Maths + Biology + Social;

var Percentage = Total / 100;

var Earned = OverAllMarks - Total;

var CGPA = Percentage * 100;

console.log("Total Marks : " + Total);
console.log("Over All Percentage : " + Percentage);
console.log("Missed Marks : " + Earned);
console.log("Coversion : " + CGPA);

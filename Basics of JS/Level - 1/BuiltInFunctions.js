var A = 636;
var B = 1.7745;
var C = 100.1009080

// To convert number to string use toString()
console.log(A.toString());

// To add (e+0) after the decimal point with fixed length from (0-20) use toExponential()
console.log(B.toExponential(3));

// To round-off the decimal point value use toFixed()
console.log(B.toFixed());

// To know the exact value use toPrecision()
console.log(A.toPrecision(3));

// To print the primitive type use valueOf()
console.log(C.valueOf());

// Others build in
console.log(parseInt("33.66"));
console.log(parseFloat("13.66"));
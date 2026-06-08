// Arrow Function

const Name = (fName,lName) => {
    console.log(fName + lName);
}
Name("John", "Vick");

// Nested Function

function Sum(num1){
    return function Sum2(num2){
        return num1 + num2;
    };
}
const result = Sum(10);
const FinalResult = result(20);
console.log(FinalResult); 
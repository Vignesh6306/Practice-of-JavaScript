const A = [10,5,15,3,9,2];
console.log("Before Sorting : "+A);

A.sort(function(a,b){
    return a-b; // (b-a) vice-versa
});

console.log("After Sorting : " + A);

var R = A.reverse();
console.log("Sort in reverse order : " +  R);
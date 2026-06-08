var x = 10;
var y = 10;


try{
    var A = x+y+z;
    console.log(A);
} 
catch(err){
    console.log("you not provided the value for z");
    throw error.name;
} 
finally{
    console.log("Both the block are executed");
}
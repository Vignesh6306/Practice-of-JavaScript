const person = new Object();
person.FName = "Chris";
person.LName = "Evan";
person.age = 45;
person.info = function(){
    console.log("He acted in Marvel");
};

console.log(person);
console.log(person.info)

const person2 = {
    Name : "Chris Hemsworth",
    Age : 50,
    desc : function(){
        console.log("He also acted in Marvel with Evans");
    }
}

console.log(person2);
console.log(person2.desc);
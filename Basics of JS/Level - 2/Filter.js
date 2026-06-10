const number = [1,2,3,4,5,6,7];
console.log("Before filtering : " +number);
const even = number.filter((item) => item%2==0);
const odd = number.filter((item) => item%2!=0);
console.log("After filtering the even terms : " + even);
console.log("After filtering the odd terms : " + odd);

const NameList = [
    {Name : 'Vicky', Age : 17},
    {Name : 'Virat', Age : 18},
    {Name : 'Nolan', Age : 16},
    {Name : 'Pat', Age : 18},
];

const Age = NameList.filter((a) => a == 18);
console.log("The elidgible students : " + Age);
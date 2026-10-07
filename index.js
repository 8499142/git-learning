//functions

//Declaration
function myFun(num1,num2) {
   return num1 - num2;
}

//Expression
const addition = function(num1,num2) {
    return num1 + num2;
}

//Arrow function
const add = (num1,num2) => {
    return num1 + num2;
}

const addd=(num1,num2) => num1 + num2;
console.log(myFun(10,30));

//objects
const user1={
    id:1,
    name:"Vaishu",
    age:21,
    loc:"Hyderabad",
};

console.log(user1);
user1.status="active";
console.log(user1);
console.log(user1.name);

const data=[
    {id:1,name:"Vaishu",age:21,loc:"Hyderabad"},
    {id:2,name:"Anitha",age:22,loc:"Hyderabad"},
];
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[0].name);
console.log(data[1].name);
console.log(data[0].age);
console.log(data[1].age);
console.log(data[0].loc);
console.log(data[1].loc);
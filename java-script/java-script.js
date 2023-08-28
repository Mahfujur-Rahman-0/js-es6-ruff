//es6 declaring a function
()=>{
    console.log(1);
}

var a = ()=>{
    console.log(1);
}
var b = ()=>console.log(1);

//declaring class
class ba{
    constructor(perameteOne,perameterTwo){
        console.log(perameteOne+perameterTwo);
    }
}

const m = new ba(1,2);
//Making some arguments
function e(num1, num2) {
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}

const result = e(1, 3, 2, 7);
console.log(result);
//scope
var aa = (first,second)=>{
    const resultll= first + second;
    return resultll;
}

console.log(aa(2,3));
//closer area
// function acc(){
//     function(){
//         console.log(1);

//     }
// }

//slice
var dm =[1,2,3,54,1,65];
const cd=dm.slice(3,5);
console.log(cd);
//templete string

var usuer = 'yahoo baba';
var ool = 'Hello' + usuer;
var templateStringNewMathod = `hello ${usuer} `;
//rest operator
function sum(name,...args){
    console.log(args);
    document.write(`hello ${name} : `)
    let sum = 0;
    for (let i in args){
        sum+=args[i];
    }
    document.write(sum + "<br>");
} 

sum('mahfujur',2,3,4);
sum('rahman',6,5,8,8,8,56,46,465,465,41252626,54);

//spred operatr
function sum(name,...args){
    console.log(args);
    document.write(`hello ${name} : `)
    let sum = 0;
    for (let i in args){
        sum+=args[i];
    }
    document.write(sum + "<br>");
} 

var arr = [10,20,30];
sum('rahman',...arr);
//example 2
var array = [10,20,30,50,56,60];
console.log(...array);
//concat array
var concat1 = [20,30,50,60,90];
var concat2 = [80,70];
var concat3 = concat1.concat(concat2);
var transferObj4 = {...concat1,...concat2};
console.log(concat3);
console.log(transferObj4);
//object literrals
var Name1 = 'Mahfuj';
var address = 'tempo@mail.com';
       //Older mathod for object literrals
var convertObj = {
    Name1 : Name1,
    address : address,
}

console.log(convertObj);
        //New mathod for object literrals
var convertObj2 = {
    Name1,
    address
} 
console.log(convertObj2);
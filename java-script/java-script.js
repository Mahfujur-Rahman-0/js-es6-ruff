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
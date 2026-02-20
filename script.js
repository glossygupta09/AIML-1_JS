// console.log("Hello World");
// document.write("Hello World");
var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(typeof(num));
num = "Sanjeev.son";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;

const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("True");
}
else{
    console.log("False");
}

var a = 100; var b= 13; var c=10; var linebraek = "<br>";

document.write("a+b+c=");
result = a+b+c;
document.write(result);
document.write(linebreak);

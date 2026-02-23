// var a =10;
// var b = 20;
// var linebreak = "<br/>";

// document.write("(a==b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>b)=>");
// result=(a>b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<=b)=>");
// result=(a<=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>=b)=>");
// result=(a>=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(linebreak);

// var count;
// document.write("Starting loop"+"<br/>");
// for(count=0; count<10; count++){
//     document.write("Current count:"+count);
//         document.write("<br/>");
    
// }
// document.write("Loop stopped");


const person = {
    fname:"Ajay",
    iname:"Singh",
    age:25
}
for(let x in person){
console.log("Person details:"+x+":"+person[x])
}

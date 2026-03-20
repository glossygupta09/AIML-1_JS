// var promise = new Promise((resolve,reject)=>{
// let success = true;
// if(success)
// resolve("Data Loaded");
// else
// reject("Error occured");
// });
// promise.then(result=>console.log(result)).
// catch(error=>console.log(error));

// try{
//     var x = y+10;
// }catch(error){
//     console.log(error.message);
// }
localStorage.setItem("name","Jeet");
var name = localStorage.getItem("name");
localStorage.removeItem("name");

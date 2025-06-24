// var -> it is global scope
var a = 10;
if(10>2){
    var a = 20;
}
console.log(a);

// let -> It is a blocked scope
let b = 10;
if(10>2){
    let b = 20;
}
console.log(b);
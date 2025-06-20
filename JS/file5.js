// //    REGULAR FUNCTION


// function greet(){
//     console.log("Good Afternoon");
// }
// greet();


// // IIFE => Immediately Invoked Function Expression
// (function greet(){
//     console.log("Good Afternoon");
// })()


// function add(a,b){
//     console.log(a+b);
// }
// add(4,5);


// function add(a,b){
//     return a+b;
// }
// const result = add(4,5);
// console.log(result);


function add(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
add(4,5);
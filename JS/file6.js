// //    ARROW FUNCTION

// greet();   // Hoisting
// function greet(){
//     console.log("Hello");
// }
// greet();


// // Hoisting
// x = 10;
// console.log(x);
// var x;



// // greet(); => Hoisting does not work with arrow function
// const greet = () => {console.log("Hello")};
// greet();


// const add = (a,b) => {
//     console.log(a+b);
// }
// add(4,5);


// const add = (a,b) => {
//     return(a+b);
// }
// const result = add(4,5);
// console.log(result);


const add = (...args) =>{
    console.log(args);
}
add(4,5,6,7,8)
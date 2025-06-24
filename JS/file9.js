// //   ARRAYS


// const score = [2,1,7,5,3];
// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);
// const newScore = [...score,9];
// console.log(newScore);
// console.log(typeof newScore);


// const cart = {
//     1:5,
//     5:3,
// };
// const newCart = ({...cart,2:1,4:7})
// console.log(newCart)



let cart = {};

const products = [
    { id: 1, name: "Product 1", price: 25 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 75 },
];
const newProducts = [...products, { id: 4, name: "products 4", price: 100 }];
console.log(newProducts);


function addToCart(id) {
    cart = { ...cart, [id]: 1 };
}
function cartValue(id) {
    cart[id] = cart[id] + 1;
}
addToCart(1);
console.log(cart);
addToCart(3);
cartValue(3);
console.log(cart);


// //    FOR EACH
// const score = [2,1,7,5,3];
// score.forEach((value)=>{
//     console.log(value)
// });
// score.forEach((value,index,arr)=>{
//     console.log(`Index: ${index}, Value: ${value}, Array: ${arr}`);
// });
// score.forEach((a,b,c)=>{
//     console.log(c[b]);
// });


// //  MAP
// const score = [2,1,7,5,3];
// const newScore = score.map((value) => {
//     // console.log(value);
//     return value > 2;   // If you will not return it so newScore will give you undefined
// })
// console.log(newScore);


// //   FILTER
// const score = [2,1,7,5,3];
// const newArray = score.filter((value) => {   // Filter only returns when it gets true...in this example 2,1 are not greater than 2 so only 7,5,3 will get added to newArray
//     return value > 2;
// });
// console.log(newArray);


// //   FIND
// const score = [2, 1, 7, 5, 3];
// const find = score.find((value) => {
//     return value === 2;
// });
// console.log(find);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// users.forEach((v) => console.log(v.id));

// const result = users.find((user) => {
//     return user.name === "Bob"
// });

// console.log(result);



// //   REDUCE
const score = [2,1,7,5,3];
const newScore = score.reduce((sum,value) => {
    return sum + value;
},0);
console.log(newScore)



















// 🔍 .find()
// ✅ Purpose:
// Returns the first element in the array that matches a condition.
// If nothing is found, it returns undefined.

// 🧠 When to Use:
// When you need to find a single item (not all items) based on a condition.

// 🧪 Example:
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const result = users.find(user => user.name === "Bob");

// console.log(result); 
// // Output: { id: 2, name: "Bob" }




// 🧮 .reduce()
// ✅ Purpose:
// Reduces the array to a single value by executing a function on each element.

// 🧠 When to Use:
// When you want to sum, accumulate, or combine all elements into one value (like total, max, min, object creation, etc.).

// 🧪 Example 1: Sum of numbers
// const numbers = [10, 20, 30];

// const total = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(total); 
// // Output: 60

// 🧪 Example 2: Count frequency of items
// const fruits = ["apple", "banana", "apple", "orange", "banana"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);
// // Output: { apple: 2, banana: 2, orange: 1 }


// 🧼 .filter()
// ✅ Purpose:
// Returns a new array with all elements that pass a condition.

// 🧠 When to Use:
// When you want to get multiple matching values (not just one like .find()).

// 🧪 Example:
// const numbers = [1, 2, 3, 4, 5, 6];

// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); 
// // Output: [2, 4, 6]
// ✅ Quick Summary Table
// Method	Returns	Purpose	Use Case Example
// .find()	First matching item	Find one item	Find the first user with name === 'Bob'
// .reduce()	One final value	Reduce to a total, object, or summary	Calculate total, group by, count frequency
// .filter()	New array	Get all items that match a condition	Get all even numbers from an array
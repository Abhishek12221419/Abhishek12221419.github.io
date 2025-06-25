// // PROMISES :-
// function f1(x){
//     // return 5;
//     // setTimeout(()=>{ 
//     //     return 5;
//     // },1000)

//     return new Promise((resolve, reject) => {
//         // resolve(5);
//         // reject("Something went wrong");
//         if(x>0) resolve(x);
//         else reject("Invalid Input");
//     })
// }
// function f2(x){
//     console.log(x+7);
// }
// f1(-1)
// .then((n) => f2(n))
// .catch((err) => console.log(err));



// // API :-
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())  // When we use res.text() then there will be no changed from JSON string to JSON object....so we will get data in JSON string format
// .then((data) => {
//     // console.log(data)
//     data.map((value) =>{
//         console.log(value.name);
//     })
// })
// .catch((err) => console.log(err));


// ASYNC AND WAIT :-
const fetchData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.map((value) => {
        console.log(value.name)
    })
};
fetchData();
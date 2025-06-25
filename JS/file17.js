// CLOSURE PROPERTY :- The closure property is the ability of a function to “remember” variables from its outer scope, even after the outer function has finished running.
function main(){
    let b = 1;
    function sub(){
        return b++;
    }
    return sub;
}
const f1 = main();
console.log(f1());
console.log(f1());

{
    var A = 1000;
    let a1=10;
    const a2 = 20;
}
console.log(A);
// console.log(a1); uncaught reference error
// console.log(a2); uncaught reference error

function fun1(){
    let b1=100;
    const b2 = 200;
    var b3 = 300;
    console.log(b1,b2,b3);
}
// console.log(b1); uncaught reference error
// console.log(b2); uncaught reference error
// console.log(b3); uncaught reference error
fun1();

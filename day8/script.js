function fun1(){
    console.log("from f1 function");
}
function fun2(name){
    console.log(`hi ${name} guru`);
}

fun1();
fun2("kamalesh");
fun2("bhAAi");

// for(let i=0;i<2;i++){
//     let nam = prompt("enter the name here");
//     fun2(nam);
// }

function fun3(a,b){
    return  a+b;
}
console.log(fun3(10,20));
function fun4(){
    let a=10;
}
console.log(fun4 , typeof fun4);
function fun5(){

}
console.log(fun5())

function mul(a,b){
    let res = a*b;
    console.log(res);
    return res;
}
console.log(mul(10,10));

function fun6(a,b,c){
    console.log(a,b,c);
    console.log(arguments);
    console.log(arguments[3]);
}
fun6(10,20,30,40,50);

function fun7(user_name,sal,company="META"){
    console.log(user_name,sal,company);
}
fun7("karru",696969,);

(function (){
    console.log("in anomous block");
}());

(function (a,b){
    console.log("hii",a+b);
}(10,20));

let AAA = (function (){
    console.log("AAA");
});
AAA();

let AA = (function (a,b){
    console.log("HI AA");
    console.log(arguments[5]+arguments[4]);
    console.log(arguments)
    console.log(arguments[4])
});
AA(10,20,30,50,40,60);

let BB = (function div(){
    console.log(10/20);
});
// div() div not in
BB();

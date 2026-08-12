let arr = [()=>{console.log("hello in arr[0]")},'arr[1]string hello'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
arr[0]();
const obj1 = {
    name : "lallli",
    x : function (){
        console.log("function in obj1.x hi ")
    }
}
console.log(obj1);
console.log(obj1.name);
console.log(obj1.x);
console.log(obj1.x())

function freqofcount(n){
    if(n == 0) return;
    console.log(n);
    freqofcount(n-1);
}
freqofcount(5);

function factorial(num){
    if(num === 1) return num;
    return num*factorial(num-1);
}
console.log(factorial(21));

function Parent(){
    console.log("inside the parent function");
    function child(){
        console.log("inside the child function");
    }
    child();
}
Parent();
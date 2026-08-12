console.log("hi");
let arr1 = ["red","green","blue","white"];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(`${arr1[i][j]}`);
    }
}

for(let i=arr1.length-1;i>=0;i--){
    console.log(`${arr1[i]}`);
}
console.log("20");
let i=3;
while(i < 5){
    console.log(i++);
}

// let ampt=0;
// let crt = "abc";
// while(ampt<3){
//     let pre = prompt("enter the pass");
//     if(pre == crt){
//         console.log("pass is crt");
//         break;
//     }
//     ampt++;
// }
// if(ampt > 2){
//     console.log("try after some time");
// }
let c=0;
do{
    console.log("hello a"+c);
    c++;
}while(c < 10)

let a1 = ["hii","hello","bye"];
let a2 = [];
let ind=0;
for(let i=a1.length-1;i>=0;i--){
    let rev="";
    for(let j=a1[i].length-1;j>=0;j--){
        rev += a1[i][j];
    }
    a2[ind++] = rev;
}
console.log(a2);
for(let i=0;i<a2.length;i++){
    console.log(a2[i]);
}

let data=[
    {ename:"abc",salary:100000},
    {ename:"xyz",salary:50000},
    {ename:"pqr",salary:60000},
    {ename:"klm",salary:35000}
];

for(let i=0;i<data.length;i++){
    if(data[i].salary > 50000){
        console.log(data[i]);
    }
}

console.log("----------------------");
let a5=[1,2,3,4,[5,6,7],8,[9,10]];
let sum =0;
for(let i=0;i<a5.length;i++){
    if(a5[i].length > 1){
        for(let j=0;j<a5[i].length;j++){
            sum += a5[i][j];
        }
    }
    else{
        sum += a5[i];
    }
}
console.log(sum);
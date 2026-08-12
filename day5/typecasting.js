let x = 10;
let y = "20";
//implicet
console.log(x+y , typeof (x+y));//1020
console.log(y-x);//10
console.log(10*"2");//20
console.log(10+true);//11
console.log(+false);//0
console.log(true+false+[10]);//110 string
console.log(undefined+"hi");// undefiendhi
console.log(undefined+true);//Nan
console.log(undefined+undefined);//Nan not a number
console.log(null+10);
// explicet 

let a =10;
let num_str=String(a);
console.log(num_str);//string 10
let b = true;
let bool_str = String(b);
console.log(bool_str , typeof bool_str);
let c = "100a";
let str_num = Number(c);
console.log(str_num);

let sunday="raining";
if(sunday === "class"){
    console.log("come to class");
}
else{
    console.log("no class");
}

console.log("hi");console.log("hi");
// if
// else if 
// else if 
// else if 
// else
const day = "monday";
switch(day){
    case "monday":
        console.log("one monday class");       
        break;
    case "tuesday":
        console.log("one tuesday class");
        break;
    case "wednesday":
        console.log("o wednesday class");
        break;
    case "thursday":
        console.log("thursday class");
        break;
    default:
        console.log("no class");
}

let marks = 90;
switch(true){
    case marks>=90:
        console.log("A grade");
        break;
    case marks>=80:
        console.log("B grade");
        break;
    case marks>=70:
        console.log("C grade");
        break;
    case marks>=60:
        console.log("D grade");
        break;
    default:
        console.log("fail");
}

let marks1 = 90;
if(marks1>=90){
    console.log("A grade");
}
else if(marks1>=80){
    console.log("B grade");
}
else if(marks1>=70){
    console.log("C grade");
}
else if(marks1>=60){
    console.log("D grade");
}
else{
    console.log("fail");
}

let loging = true;
loging ? console.log("login sureeeee") : console.log("login fail"); 

// nested if 
let user=true;
let pass = "abc123";
if(user){
    if(pass === "abc123") console.log("login sucess");
    else console.log("incorrect pass");
}                                                 
else{
    console.log("user invalid");
}

console.log("20"-10);
console.log("20"*"2");
console.log(20*"2");
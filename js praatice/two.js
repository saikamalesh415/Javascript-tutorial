let year = 1222;
console.log("two.js");
if(year % 400 === 0 || (year % 100 !== 0 && year % 4 ===0 )){
    console.log("leap year");
}else{
    console.log("Not a leap year");
}
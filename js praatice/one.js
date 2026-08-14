let num = 12321;
let rev = 0;
let store = num;
while(num > 0){
    let dig = num % 10;
    rev =( rev * 10) + dig;
    num = Math.floor(num / 10);
}
if(store === rev){
    console.log(`Palindrom ${store} rev ${rev}`);
}else{
    console.log("not palindrom");
}
let emails = [
    "john@gmail.com",
    "admin@company.com",
    "user@yahoo.com",
    "invalidemail",
    "developer@company.com"
];
let result ={
    gmail : 0,
    company : 0,
    yahoo : 0
}
for(let i=0;i<emails.length;i++){
    if(emails[i].endsWith("@gmail.com")){
        result.gmail++;
    }
    if(emails[i].endsWith("@company.com")){
        result.company++;
    }
    if(emails[i].endsWith("@yahoo.com")){
        result.yahoo++;
    }
}
console.log("six.js");
console.log(result);
let customers = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "RAHUL", email: "RAHUL@gmail.com" },
    { id: 4, name: "Arjun", email: "arjun@gmail.com" }
];

let result1 =[];
let storename ={};
for(let i=0;i<customers.length;i++){
    let count = 0;
    let ciname = customers[i].name.toLowerCase();
    for(let j=0;j<customers.length;j++){
        let cjname = customers[j].name.toLowerCase();
        if(i != j){
            if(ciname == cjname || storename[ciname] != undefined){
                count++;
                break;
            }
        }
    }
    if(count > 0){
        storename[ciname] = 1;
        let cname = customers[i].name;
        let cemail = customers[i].email;
        let cobj ={};
        cobj.name = cname;
        cobj.email = cemail;
        result1.push(cobj);
    }
}
console.log("seven.js");
console.log(result1);
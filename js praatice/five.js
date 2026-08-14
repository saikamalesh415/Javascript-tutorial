console.log("five.js");
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let totalitems = 0;
let totalcost = 0;
for(let i=0;i<cart.length;i++){
    totalitems += cart[i].quantity;
    totalcost += (cart[i].quantity * cart[i].price);
}
console.log(`totalitems ${totalitems}`);
console.log(`totalcost ${totalcost}`);
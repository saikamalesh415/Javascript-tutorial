let h1 = document.querySelector("h1");
console.log(h1);

let content = h1.textContent;
console.log(content);

h1.textContent="Hello chakka";

console.log(h1.innerText);
h1.innerText="<h3>Hello JS</h3>";

let h2 = document.querySelector("h2");
console.log(h2.innerHTML);
console.log(h2.innerText);
let x = h2.textContent;
console.log(x);

h2.innerHTML="<h4>Hello H4</h4>";
let div=document.querySelector("div");
div.innerHTML=`<h1>Name : ABC</h1> <img src="" alt="image">`;
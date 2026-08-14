let p1 = document.getElementById("paragraph1");
console.log(p1);

let li = document.getElementsByClassName("list_items");
console.log(li);

let div = document.getElementsByTagName("div");
console.log(div);

let para = document.getElementsByName("para");
console.log(para);

let paragraph = document.querySelector(".p");
console.log(paragraph);
console.log(document.querySelector(".list_items"));

let alllist = document.querySelectorAll(".list_items");
console.log(alllist);

console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("#paragraph1"));

let pre = document.querySelector("pre");
console.log(pre);
let parent = pre.parentNode;
console.log(parent);

let nex_sibling = pre.nextSibling;
console.log(nex_sibling);//text

let next_element_sibling = pre.nextElementSibling;
console.log(next_element_sibling); //<pre id="pre2">pre2</pre>

let pre2 = document.getElementById("pre2");
console.log(pre2);//<pre id="pre2">pre2</pre>

let p_sibling = pre2.previousSibling;
console.log(p_sibling); //text

let p_e_sibling = pre2.previousElementSibling;
console.log(p_e_sibling); //<pre>pre1</pre>

let container = document.getElementById("container");
console.log(container);

let child_node = container.childNodes;
console.log(child_node);

let first_child = container.firstChild;
console.log(first_child);

let first_ele_child = container.firstElementChild;
console.log(first_ele_child);

let last_child = container.lastChild;
console.log(last_child);

let last_ele_child = container.lastElementChild;
console.log(last_ele_child);
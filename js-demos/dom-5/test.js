let parentDiv = document.querySelector(".parent");
let delBtn = document.querySelector(".btn");

//let data='This is paragraph'
//create children using innerHTML
parentDiv.innerHTML += `<p class='para1'>This is first para</p>`;

//create children using createElement()
//create an element
let p = document.createElement("p");
//set id attribute with value para2
// p.setAttribute('class','para3')
//p.id='para2'
p.className = "para3";
//provide content
p.textContent = "This is second para";
//append to a parent
parentDiv.append(p);

delBtn.addEventListener("click",()=>{
 // p.remove()
 parentDiv.removeChild(parentDiv.firstElementChild)
});


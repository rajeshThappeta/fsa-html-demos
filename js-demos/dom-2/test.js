let parentDiv = document.querySelector(".parent");
let btn = document.querySelector("button");

//get chiuldren of parentDiv
console.log(parentDiv.children);
console.log(parentDiv.firstElementChild);
console.log(parentDiv.lastElementChild);
console.log(parentDiv.children.item(0));

//get parent of parentDIv
console.log(parentDiv.parentElement.parentElement);

//access li
console.log(parentDiv.children[3].children);

//get sibling of parentDiv
console.log(parentDiv.previousElementSibling);

btn.addEventListener("click", () => {
  parentDiv.hidden === true
    ? (parentDiv.hidden = false)
    : (parentDiv.hidden = true);

  if (btn.textContent === "Show DIV") {
    btn.textContent = "Hide DIV";
    btn.style.backgroundColor='red'
  } else {
    btn.textContent = "Show DIV";
    btn.style.backgroundColor='green'
  }
});

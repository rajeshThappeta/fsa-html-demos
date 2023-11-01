//access h1
let h1 = document.querySelector("#header");
let btn = document.querySelector("button");
let p = document.querySelector("p");
let img = document.querySelector("img");
let div=document.querySelector("div")

//attch evnt listerner to h1
btn.addEventListener("click", () => {
  //change content of h1
  h1.textContent === "Good morning"
    ? (h1.textContent = "Welcome to DOM")
    : (h1.textContent = "Good morning");

//change style of h1
    h1.style.color='red'
    h1.style.backgroundColor='yellow'
    h1.style.fontSize='7rem'


  p.textContent = "Document Object Model";

  img.src =
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg";

    div.innerHTML=div.innerHTML+'<h3>Hello</h3> <p>Para</p>'
});

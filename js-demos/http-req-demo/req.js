//make HTTP req /API req/AJAX req (Asyn JS and XML)

// function getData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((posts) => console.log(posts))
//     .catch((err) => console.log("err is ", err));
// }

// getData()

//async & await
async function getData() {
  try{
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await respnse.json();
  console.log(data);
  }catch(err){
    console.log(err)
  }
}

getData();



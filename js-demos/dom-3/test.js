let tbody = document.querySelector("tbody");

async function getPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postsArray = await res.json();

  for (let postObj of postsArray) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr>
       <td>${postObj.userId}</td> 
       <td>${postObj.id}</td> 
       <td>${postObj.title}</td> 
       <td>${postObj.body}</td>
       </tr>`;
  }
}

getPosts();

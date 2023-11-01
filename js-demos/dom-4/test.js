let usersCard = document.querySelector(".user-cards");


async function getUsers() {
  let res = await fetch("https://reqres.in/api/users?page=2");
  let users = await res.json();
  let usersArray = users.data;

  for (let userObj of usersArray) {
    console.log(userObj);
    usersCard.innerHTML =
    usersCard.innerHTML +
      `<div class='col text-center'>
      <div class='card h-100'>
      <img src=${userObj.avatar} class='w-100'>
      <div class='card-body'>
          <h2>${userObj.id}</h2>
        <p class='lead'>${userObj.first_name} ${userObj.last_name}</p> 
        <p class='lead'>${userObj.email}</p>
      </div>
      </div>
            </div>
        `;
  }
}

getUsers();

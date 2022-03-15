//Fetch (fetch is a promise, meaning it takes time to fetch.)
fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
let url = "http://localhost:3000/users";
async function getAllUsers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getAllUsers();

async function getUser(userid) {
  const response = await fetch(`${url}/${userid}`);
  const data = await response.json();
  console.log(data);
}
getUser(2);

//User Creation
let user = {
  firstName: "John",
  lastName: " Doe",
  username: "John Doe",
  email: "doe@email.com",
  gender: "Male",
};

async function createUser(userinfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userinfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
// createUser(user);

async function updateUser(userinfo, userid) {
  const response = await fetch(`${url}/${userid}`, {
    method: "PATCH",
    body: JSON.stringify(userinfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(51, data);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json;
  console.log(data);
}

deleteUser(996, data);

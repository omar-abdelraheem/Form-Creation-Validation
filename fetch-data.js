document.addEventListener("DOMContentLoaded", fetchUserData());

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    console.log(response);
    const users = await response.json();
    console.log(users[0].name);
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const userName = document.createElement("li");
      userName.textContent = user.name;
      userList.appendChild(userName);
      console.log(user.name);
    });
    dataContainer.appendChild(userList);
  } catch {
    (error) => console.log("Failed to load user data.", error);
    dataContainer.textContent = "Failed to load user data.";
  }
}

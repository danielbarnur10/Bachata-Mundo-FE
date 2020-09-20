import * as userService from '../services/userService.js'
import * as localStorageService from '../services/localStorageService.js';

const usersTable = document.querySelector(".users");
const users = localStorageService.get("users");

usersTable.innerHTML += ` 
<table>
  <tr>
    <th>Username</th>
    <th>Password</th>
    <th>Action</th>
${users.map((user, index) => { 
 return `
    <tr>
      <td>${users[index].username}</td>
      <td>${users[index].password}</td>
      <td class='button' onclick='removeUser(${users[index].username})'>Remove</td>

    </tr>
  
  `}
)}
</table>
`;

window.removeUser = removeUser;
function removeUser(user) {
  console.log(user);
  userService.remove(user);
}
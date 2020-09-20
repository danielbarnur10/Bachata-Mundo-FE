import * as userService from '../services/userService.js'
import * as localStorageService from '../services/localStorageService.js'

window.submitDetails = submitDetails;
function submitDetails(event) {
    event.preventDefault(); // cancels form refresh
    const data = event.target;
    const username = data.username.value;
    const password = data.password.value;
    const repassword = data.repassword.value;
    //check if username is not empty
    if (username.length < 1) {
        document.querySelector('.user-length-error').style.visibility = 'visible';
        return;
    }
    // check if user exist in user 
    const user = userService.get(username);
    if (user) {
        document.querySelector('.user-exist-error').style.visibility = 'visible';
        return;
    };
    // checks if passwords matches
    if (password !== repassword) {
        document.querySelector('.password-match-error').style.visibility = 'visible';
        return;
    }
    //checks if user accepts the terms
    const item = document.querySelector('[type = "checkbox"]')
    if (!item.checked) {
        document.querySelector('.checkbox-error').style.visibility = 'visible';
        return;
    }
    userService.add({ username, password });
    window.location.replace("../usersTable/usersTable.html");


}

// if all ok then save in data the user and then to login page
//do service userService where i can get all users and create/add user and remove removes user from all users
//clears local-Storage

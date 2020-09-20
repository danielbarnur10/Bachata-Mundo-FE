import * as userService from '../services/userService.js';
window.submitDetails = submitDetails;
function submitDetails(event) {
    event.preventDefault(); // cancels form refresh

    const data = event.target;
    const username = data.username.value;
    const password = data.password.value;

    // check if user exist in user 
    const isExist = userService.get(username); // TODO check if user exist 
    const credentialsErrorEl = document.querySelector('.credentials-error');
    if (isExist && (password === isExist.password)) {
        credentialsErrorEl.style.visibility = 'hidden';
        window.location.replace("../usersTable/usersTable.html");
    }
    else {
        credentialsErrorEl.style.visibility = '';
    }

}   
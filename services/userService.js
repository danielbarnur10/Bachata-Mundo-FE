import * as localStorageService from './localStorageService.js';

// guard operator
// default operator
export function get(username) {
    if (!localStorageService.get("users")) return;

    let users = localStorageService.get("users");
    // array methods - map, foreach (what's the difference foreach vs map), find, every, some, filter, reduce... 
    return users.find(user => user.username === username);
}

export function add(user) {
    let users = localStorageService.get("users");
    if (!users) {
        users = [];
    }
    users.push(user);
    localStorageService.set("users", users);
}

export function remove(username) {
    let users = localStorageService.get("users");
    if (!users) return;

    const filteredUsers = users.filter(user => user.username !== username);
    localStorageService.set("users", filteredUsers);
}

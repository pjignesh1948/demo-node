const fs = require('fs');
function getUsers() {
    const data = fs.readFileSync('users.json', 'utf-8');
    return JSON.parse(data);
}

function addUser(user) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

function getUsersAsync() {
    fs.readFile('users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Async Users:", JSON.parse(data));
        }
    });
}

module.exports = {
    getUsers,
    addUser,
    getUsersAsync
};
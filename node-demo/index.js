const userService = require('./userService');
userService.addUser({
    id: 1,
    name: "Rinku"
});
userService.addUser({
    id: 2,
    name: "Govind"
});
userService.addUser({
    id: 3,
    name: "jignesh"
});
const users = userService.getUsers();
console.log("All Users:", users);
userService.getUsersAsync();
console.log("Program Ended");

const name = process.argv[2];
console.log("name:", name);
if (name) {
  userService.addUser({
    id: Date.now(),
    name: name
  });
  console.log("User added:", name);
}

console.log(userService.getUsers());
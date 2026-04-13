let users = [
  { id: 1, name: "Rinku", email: "rinku@example.com" },
  { id: 2, name: "Govind", email: "govind@example.com" },
];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const createUser = (userData) => {
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    ...userData,
  };


  ';l'

  users.push(newUser);
  return newUser;
};

const updateUser = (id, userData) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = {
    ...users[userIndex],
    ...userData,
  };

  return users[userIndex];
};

const deleteUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);

  return deletedUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
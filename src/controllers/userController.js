const { validateUserInput } = require('../utils/validation');


let users = [];
let nextId = 1;


const createUser = (req, res) => {
  const { name, email, age } = req.body;

  
  const validationError = validateUserInput(name, email, age);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  
  const newUser = { id: nextId++, name, email, age };
  users.push(newUser);
  res.status(201).json(newUser);
};


const getAllUsers = (req, res) => {
  res.status(200).json(users);
};


const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
};


const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, age } = req.body;

 
  const validationError = validateUserInput(name, email, age);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], name, email, age };
  res.status(200).json(users[userIndex]);
};


const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
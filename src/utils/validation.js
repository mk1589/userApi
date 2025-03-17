
const validateUserInput = (name, email, age) => {
    if (!name || !email || !age) {
      return 'Name, email, and age are required';
    }
  
    if (typeof name !== 'string' || typeof email !== 'string') {
      return 'Name and email must be strings';
    }
  
    if (typeof age !== 'number' || age < 0) {
      return 'Age must be a positive number';
    }
  
    return null;
  };
  
  module.exports = { validateUserInput };
const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

router.get('/', async (_, res) => {
  const addedTodos = await getAsync('added_todos');
  const response = {
    added_todos: addedTodos ? parseInt(addedTodos) : 0
  }
  res.send(response);
});
 
module.exports = router;
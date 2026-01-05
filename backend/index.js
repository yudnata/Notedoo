const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./src/database/database');

app.use(cors());
app.use(express.json());
const PORT = 5000;

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [
      description,
    ]);

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/todos', async (req, res) => {
  try {
    const allTodo = await pool.query('SELECT * FROM todo');
    res.json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getTodo = await pool.query('SELECT * FROM todo WHERE id_todo = $1', [id]);
    res.json(getTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.patch('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE id_todo = $2 RETURNING *',
      [description, id]
    );
    res.json(updateTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE id_todo = $1 RETURNING *', [id]);
    res.json(deleteTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(PORT, () => {
  console.log(`server running on Port ${PORT}`);
});

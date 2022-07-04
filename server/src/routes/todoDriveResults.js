import express from 'express';
import pool from '../db.cjs';

const router = express.Router();
const table = 'tododriveresults';

// fetch all todos
router.get('/', async (req, res) => {
  try {
    const allTodos = await pool.query(`select * from ${table} order by id`);
    res.json(allTodos.rows);
  } catch (error) {
    res.send(error);
  }
});

// create a todo
router.post('/', async (req, res) => {
  try {
    const { about } = req.body;
    const newTodo = await pool.query(
      `insert into ${table} (about) values($1) returning *`,
      [about]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

// fetch a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`select * from ${table} where id = $1`, [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

// update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { about } = req.body;
    const updateTodo = await pool.query(
      `update ${table} set about = $1 where id = $2`,
      [about, id]
    );
    res.send('updated!');
  } catch (error) {
    res.send(error);
  }
});

// delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(`delete from ${table} where id = $1`, [
      id
    ]);
    res.send('deleted!');
  } catch (error) {
    res.send(error);
  }
});

export default router;

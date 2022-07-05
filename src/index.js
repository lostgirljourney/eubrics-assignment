import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.cjs';
import todoMakeDecisions from './routes/todoMakeDecisions.js';
import todoDriveResults from './routes/todoDriveResults.js';
import todoInfluenceNegotiate from './routes/todoInfluenceNegotiate.js';
import todoManageConflict from './routes/todoManageConflict.js';
import todoThinkLaterally from './routes/todoThinkLaterally.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening to server port: http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
  try {
    const tables = await pool.query('select * from behaviourList');
    const tableName = [];
    tables.rows.map((table, index) =>
      tableName.push({
        table_id: index + 1,
        table_name: table.name,
        table_link: table.tname
      })
    );
    res.send(tableName);
  } catch (error) {
    res.send(error);
  }
});

app.use('/todomakedecisions', todoMakeDecisions);
app.use('/todothinklaterally', todoThinkLaterally);
app.use('/todoinfluencenegotiate', todoInfluenceNegotiate);
app.use('/todomanageconflict', todoManageConflict);
app.use('/tododriveresults', todoDriveResults);

app.all('*', (req, res) => {
  res.send("Path doesn't exists");
});

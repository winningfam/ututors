const process = require('process');
const express = require('express');
const Knex = require('knex');
const app = express();

const connect = () => {
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  };
  if (process.env.INSTANCE_CONNECTION_NAME) {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }
  const knex = Knex({
    client: 'mysql', 
    connection: config
  });
  return knex;
}

const knex = connect();

const insertEntry = (body) => {
  return knex('students').insert(body);
}

const getEntries = async () => {
  const results = await knex
    .select('*')
    .from('tutors');
  return results.map(visit => `UserId: ${visit.user_id} First: ${visit.firstname} Last: ${visit.lastname}`);
}

app.use(express.json())

app.get('/', async (req, res) => {
    const entries = await getEntries().catch((err) => {
      console.log(err);
    });
    res.send(`Entries:\n${entries.join('\n')}`);
});

app.post('/post', async (req, res) => {
    await insertEntry(req.body);
    res.send("Entry inserted");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
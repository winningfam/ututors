const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
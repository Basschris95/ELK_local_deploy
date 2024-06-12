const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', async (req, res) => {
  console.log('Hello from the logger!');
  await axios.post('http://localhost:5044', {
    message: 'Hello from the logger!'
  });
  res.send('Hello World i am Mario!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

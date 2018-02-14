const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hi');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server listen ${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/apply', (req, res) => {
  // You can save to a database here
  console.log('Received application:', req.body);
  res.json({ message: 'Application received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

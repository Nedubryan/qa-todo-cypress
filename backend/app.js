const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [];
const validUser = { email: 'user@example.com', password: 'Password123!' };

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === validUser.email && password === validUser.password) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/items', (req, res) => res.json(items));

app.post('/items', (req, res) => {
  const item = { id: Date.now(), text: req.body.text };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  items[index].text = req.body.text;
  res.json(items[index]);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(i => i.id !== id);
  res.json({ message: 'Deleted' });
});

module.exports = app;

if (require.main === module) {
  app.listen(4000, () => console.log('API running on http://localhost:4000'));
}
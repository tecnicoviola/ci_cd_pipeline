const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from CI/CD Demo App!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'no' });
});

module.exports = app;

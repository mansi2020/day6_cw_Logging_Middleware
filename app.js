const express = require('express');

const app = express();

// Logging middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  const { method, url } = req;

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`${method} ${url} - ${duration}ms`);
  });

  next();
});

// Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({ status: 'Connected', ping: '31ms', server: 'Wingo Secure Node' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

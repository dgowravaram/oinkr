const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Oinkr!'
  });
});

app.post('/oinks', (req, res) => {
  console.log(req.body);
})

app.listen(5000, () => {
  console.log('listening');
});

// left off @ 40 min

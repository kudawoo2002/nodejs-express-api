const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side....', app: 'Notour' });
// });

// app.post('/', (req, res) => {
//   res.send('You post to this endpoint....');
// });
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 200,
    data: {},
  });
});
app.listen(port, () => {
  console.log(`app running on ${port}....`);
});

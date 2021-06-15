const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../client/dist'));
// Requests here
app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});

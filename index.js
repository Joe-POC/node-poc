const express = require('express');
const app = express();

app.use('/health-check', function (req, res) {
  res.json({CODE: 200, MESSAGE: 'hello world'});
})

app.listen(3000, ()=>{console.log("server started at localhost:3000")});
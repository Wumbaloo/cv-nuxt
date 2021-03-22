const express = require('express')
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(__dirname + "/dist"));

app.listen(process.env.PORT, '0.0.0.0', function () {
  console.log('Server running!')
})

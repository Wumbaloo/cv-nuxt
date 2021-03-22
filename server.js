let express = require('express')
let path = require('path');
let serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
let port = 8100;
let hostname = '0.0.0.0';

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

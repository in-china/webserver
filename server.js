let express = require("express");
let http = require("http");
let https = require("https");
let fs = require("fs");
var serveIndex = require('serve-index');

// Configuare https
const httpsOption = {
    key : fs.readFileSync("./lovedeeply.xyz.key"),
    cert: fs.readFileSync("./lovedeeply.xyz.pem")
}
// Create service
let app = express();
app.use(serveIndex('./public'));
app.use(express.static('./public'));


http.createServer(app).listen(8080);
https.createServer(httpsOption, app).listen(3000);

let express = require("express");
let http = require("http");
let https = require("https");
let fs = require("fs");
// Configuare https
const httpsOption = {
    key : fs.readFileSync("./lovedeeply.xyz.key"),
    cert: fs.readFileSync("./lovedeeply.xyz.pem")
}
// Create service
let app = express();
http.createServer(app).listen(8080);
https.createServer(httpsOption, app).listen(3000);

let express = require("express");
let http = require("http");
let https = require("https");
let fs = require("fs");
// Configuare https
const httpsOption = {
    key : fs.readFileSync("./https/lovedeeply.xyz.key"),
    cert: fs.readFileSync("./https/lovedeeply.xyz.pem")
}
// Create service
let app = express();
http.createServer(app).listen(80);
https.createServer(httpsOption, app).listen(443);

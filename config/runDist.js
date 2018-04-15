let webpackFile = require('./webpack/webpack.file.conf');
var mine = {
    "css": "text/css", "gif": "image/gif", "html": "text/html", "ico": "image/x-icon", "xml": "text/xml",
    "jpeg": "image/jpeg", "jpg": "image/jpeg", "js": "text/javascript", "json": "application/json",
    "pdf": "application/pdf", "png": "image/png", "svg": "image/svg+xml", "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff", "txt": "text/plain", "wav": "audio/x-wav", "wma": "audio/x-ms-wma", "wmv": "video/x-ms-wmv"
};
const
    http = require('http'), fs = require('fs'), url = require('url'), path = require('path'),
    hostname = '127.0.0.1', port = 3000;

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var realPath = path.join(webpackFile.proDirectory, pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if(!exists){
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.write('no data');
            return res.end();
        }
        if(ext=='html'){
            fs.readFile(realPath,'utf-8',function  (err,data) {
                if (err) throw err.toString();
                else {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                    res.end();
                }
            });
        } else{
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain'});
                    res.end(err);
                } else {
                    let contentType = mine[ext] || "text/plain";
                    res.writeHead(200, { 'Content-Type': contentType});
                    res.write(file, "binary");
                    res.end();
                }
            });
        }
    });
}).listen(port, hostname, function() {
    console.log('Server running at http://%s:%s', hostname, port);
});
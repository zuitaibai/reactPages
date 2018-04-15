module.exports = app =>{
    app.get('/some/path', function(req, res) {
        res.writeHead(200, { "Content-Type": "application/json;charset=UTF-8" });
        res.end(JSON.stringify({ color: 'blue' }));
    });
};

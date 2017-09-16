var http = require ('http');
var Port = process.argv[2];
var url = require('url');

var http_server = http.createServer( function (req,res){
    if (req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var for_you = JSON.stringify(url.parse(req.url, true).query);
        
        if (req.url.match('/api/parsetime*')){
            res.end('ISO TIME : ' + for_you )
        }

        if ( req.url.match('/api/unixtime*')){
            var date = new Date('2009-07-15 00:00:00'.split(' ').join('T'));
            res.end('UNIX TIME : ' + date.getTime());
        }
    }
})
http_server.listen(Port)

	var http = require('http');
	http.createServer(function(req,rep){
	 var fs = require("fs");
	var data = fs.readFileSync('中.docx');
	 
	rep.writeHead(200,{'Content-Type':'text/html'});
	rep.write('<head><meta charset="UTF-8"/></head>');
	rep.write(data.toString());
	rep.end();
	}).listen(147);
	console.log('147');
	
	

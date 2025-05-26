const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{

    const parseUrl = url.parse(req.url,true);
    const pathname = parseUrl.pathname;
    const query = parseUrl.query;

    if (pathname === '/') {
        res.writeHead(200,{'Content-Type':'application/json'});
         output = query.name || 'dawilly';
        res.end(JSON.stringify(output));
    }
    else if (pathname === '/about') {
        res.writeHead(200,{'Content-type':'text/html'})
        res.end('<h1>About Us</h1>');
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'})
    }



}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})
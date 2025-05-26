const http = require('http');

http.createServer((req,res)=>{
console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1>my name is dawilly gene</h1>");
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1>About Me</h1>");
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1>Contact page</h1>");
    }



}).listen(3000,()=>{
    console.log('Server is running on port 3000');
})
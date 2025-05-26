const http = require('http');

http.createServer((req,res)=>{


 if (req.url === '/about') {
    res.writeHead(200,{'Content-Type':'text/html'});
     res.end('<h1>About Us</h1>');
 }
 else if (req.url === '/contact') {
     res.writeHead(200,{'Content-type':'text/html'})
     res.end('<h1>Contact Us</h1>');
 }
 else{
     res.writeHead(404,{'Content-type':'text/html'})
     res.end('<h1>Page Not Found</h1>');
 }

}).listen(3000,()=>{
    console.log('Server is running on port 3000');
});
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    const ParseUrl = url.parse(req.url,true);
    const pathname = ParseUrl.pathname;
    const query = ParseUrl.query
    res.writeHead(200,{'Content-Type':'application/json'});

if (pathname === '/') {
const name = query.name || 'dawilly';
res.end(JSON.stringify(name));
}
else if(pathname === '/about'){
    res.end(JSON.stringify(query.name));
}
else if(pathname === '/contact'){}



}).listen(3000,()=>{
    console.log("Server ipo juu na ina run port 3000")
});
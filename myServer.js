const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (req.method === 'GET') {
        if (pathname === '/greet') {

            const name = parsedUrl.query.name || 'Guest';
            const response = {
                message: `Hello, ${name}! Welcome to the Node.js server.`
            };
            res.writeHead(200);
            res.end(JSON.stringify(response));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Page not found' }));
        }
    }
    else if (req.method === 'POST') {
        if (pathname === '/submit') {
            let body = '';
            
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            

            req.on('end', () => {
                try {
                    
                    const postData = JSON.parse(body);
                
                    if (!postData.name) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Name is required' }));
                        return;
                    }
                    
               
                    const response = {
                        message: `Received data: Name = ${postData.name}`,
                        success: true
                    };
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid JSON' }));
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Page not found' }));
        }
    }
 
    else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
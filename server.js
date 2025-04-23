const http = require('http'); // Import the http module
const server = http.createServer((req, res) => {
// Set the response header for all requests
res.writeHead(200, { 'Content-Type': 'text/plain' });
// Check the request URL and send different responses
if (req.url === '/') {
    res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
    res.end('This is the About page.');
    } else if (req.url === '/contact') {
    res.end('This is the Contact page.');
    } else {
    res.writeHead(404); // 404 Not Found
    res.end('Page not found.');
    }
    });
    server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
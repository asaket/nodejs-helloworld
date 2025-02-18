const http = require('http');

const port = process.env.PORT || 3000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = http.createServer(async (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();
  
  console.log(`[${timestamp}] Request received from IP: ${clientIP}, Method: ${req.method}, URL: ${req.url}`);

  // Add milliseconds of sleep
  await sleep(5000);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

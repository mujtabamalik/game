const http = require('http')
const port = 8080;
const Rx = require('rxjs')

const server = http.createServer()

const requests = Rx.Observable.fromEvent(server, 'request', Array.of);

requests.subscribe(([request, response]) => {
    
    console.log('new request', request.url);
    response.end('RxJS setup');
});

server.listen(port, (err) => {
    if (err) return console.log('Error:', err);

    console.log(`Listening on ${port}`);
})
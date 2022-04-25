const http = require('http');

let requestsCounter = 0;

const server = http.createServer((req, res) => {
    requestsCounter++;

    switch (req.url) {
        case '/students':
            res.write('Students');
            break;
        case '/':
        case '/courses':
            res.write('Front + Back');
            break;
        default:
            res.write('404');
    }

    res.end();
});

server.listen(3003)
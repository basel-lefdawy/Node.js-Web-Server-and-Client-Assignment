const http = require('http');

const sendJSONRequest = () => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/JSON',
        method: 'GET',
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const parsed = JSON.parse(data);
                console.log('Received JSON response:');
                console.log(parsed);
            } catch (err) {
                console.error('Failed to parse JSON:', err.message);
            }
        });
    });

    req.on('error', (error) => {
        console.error(`Error making request: ${error.message}`);
    });

    req.end();
};
sendJSONRequest();
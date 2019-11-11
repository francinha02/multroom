const app = require('./config/server');

const server = app.listen(80, function() {
    console.log('Servidor Online');
});

require('socket.io').listen(server);
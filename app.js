const app = require('./config/server');

const server = app.listen(80, function () {
    console.log('Servidor Online');
});

const io = require('socket.io').listen(server);
app.set('io', io);

//Criar a conexão por websocket

io.on('connection', function (socket) {
    console.log('Conection Established');

    socket.on('disconnect', function () {
        console.log('Disconected');
    });
});
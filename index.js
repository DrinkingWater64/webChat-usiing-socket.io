
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
//let filename = '/index.html';

/*app.get('/', (req , res) => {
    res.send('<h1>hello world</h1>');
});*/
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    console.log('i am connected');
    
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

});
http.listen(3000, () => {
    console.log('listening on *:3000');
});
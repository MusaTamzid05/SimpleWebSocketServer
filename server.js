
const WebSocket = require("ws");

class Server {

    constructor(address) {
        this.port = address.port;
    }

    listen() {

        const server = new WebSocket.Server({port : this.port});
        server.on("connection" , socket => this.connectSocket(socket))
        console.log(`Listening on ${this.port}`);

    }

    connectSocket(socket) {
        console.log("Socket connected");

        socket.on("message" , message => this.handleMessage(message))
    }

    handleMessage(message) {
        console.log(message);
    }
}

const server = new Server({ port : 8080 });
server.listen();


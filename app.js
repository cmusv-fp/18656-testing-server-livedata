var http = require('http');
var wsServer = require("ws").Server;

var sockserver = new wsServer({ port: 80 })
sockserver.on('connection', ws => {
  console.log("ll")
  var a = {
    'alal': 1,
    "mmmm": 2,
    "pol": "mmm"
  };
  ws.send(JSON.stringify(a));
  ws.on('close', () => console.log('Client has disconnected!'))
  // ws.on('message', data => {
  //   // sockserver.clients.forEach(client => {
  //     console.log(data.)
  //     // client.send(`hello`)
  // })
  // // })
  ws.onerror = function () {
    console.log('websocket error')
  }
 })
//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(80, () => {
//   console.log("started")
// }); //the server object listens on port 8080


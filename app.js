var http = require('http');
var wsServer = require("ws").Server;
var data = require('./liveData.js');
var sockserver = new wsServer({ port: 80 })

const sendJSON = (ws, index) => {
  if(index < data.rates.length){
    const d = data.rates[index];
    const jsonData = JSON.stringify(d); // Convert object to JSON string
    ws.send(jsonData); 
  }
};
sockserver.on('connection', ws => {
  console.log("new client connected");
  let i = 0;
  const interval = setInterval(() => {
    sendJSON(ws, i);
    i+=1;
  }, 1000);

  // // Stop sending after 10 seconds (for demonstration purposes)
  setTimeout(() => {
    clearInterval(interval);
    ws.close();
  }, 1000000);
  ws.send("coonected to socket");
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


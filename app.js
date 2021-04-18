const express = require('express');
const app = express();
const mongoose = require('mongoose');

const SerialPort = require ("serialport");
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({ delimiter: '\r\n' });

// mongoose.connect(
//     'mongodb+srv://kinga:' + 
//         process.env.MONGO_ATLAS_PW + 
//         '@node-rest-shop.coay9.mongodb.net/node-rest-shop?retryWrites=true&w=majority',
//     {   
//         useNewUrlParser: true,
//         useUnifiedTopology: true  
//     },
    
// )

var port = new SerialPort('/dev/tty.usbmodem1411',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
});

port.pipe(parser);
parser.on('data', function(data){
    const now = Date.now();
    console.log(now, data)
});

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// const SerialPort = require ("serialport");
// const parsers = SerialPort.parsers;
// const parser = new parsers.Readline({ delimiter: '\r\n' });

// // mongoose.connect(
// //     'mongodb+srv://kinga:' + 
// //         process.env.MONGO_ATLAS_PW + 
// //         '@node-rest-shop.coay9.mongodb.net/node-rest-shop?retryWrites=true&w=majority',
// //     {   
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true  
// //     },
    
// // )

// var port = new SerialPort('/dev/tty.usbmodem1421',{
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false,
// });

// port.pipe(parser);
// parser.on('data', function(data){
//     const now = Date.now();
//     console.log(now, data)
// });
   
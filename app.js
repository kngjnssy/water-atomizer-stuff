const express = require('express')
const SerialPort = require ("serialport")
const mongoose = require('mongoose')

const parsers = SerialPort.parsers
const parser = new parsers.Readline({ delimiter: '\r\n' })

const app = express()

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
})

port.pipe(parser)
parser.on('data', function(data){
    const now = Date.now();
    console.log(now, data)
})


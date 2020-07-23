
app=require("express");
img=require("capture-video-frame")
var uname
require("ejs");
server=app();
var ser = server.listen(5000)
var io = require('socket.io').listen(ser);

session = require("express-session")({
  secret: "my-secret",
  resave: true,
  saveUninitialized: true
})
var Peer = require('simple-peer')    
var cookieParser = require('cookie-parser')
server.use(cookieParser())
 
server.use(session);   //ses for managing users

sharedsession = require("express-socket.io-session");
io.use(sharedsession(session));

//Set View Engine To EJS
server.set("view engine", "ejs");
//Set Static Directory
server.use(app.static(__dirname));
const bodyParser= require('body-parser');
server.use(bodyParser.urlencoded({extended:true}))
const url = require('url');
const { render } = require("ejs");
const { exception } = require("console");
const { maxHeaderSize } = require("http");
const { Socket } = require("net");
server.use(bodyParser.json());
var socid
//mongodb
MongoClient = require('mongodb').MongoClient,
server.get('/', function(req, res) {  res.render('steam');});
io.on ("connection",socket=>{
  socket.emit("sendfeed",'you are connected')

socket.on('data',function(data){
  console.log('andar aaya')
  socket.broadcast.emit('send',data);  
});
socket.on('makeconn',function(data){
  socket.broadcast.emit('conn',data)
});
socket.on('userjumped',function(d){
socket.broadcast.emit('jump',1)
})



});
server.get('/recive',function(req,res){
res.render('reciver')
})
server.get('/onfront',function(req,res){
  res.render('user')
})
server.get('/game',function(req,res){
  res.render('game')
})
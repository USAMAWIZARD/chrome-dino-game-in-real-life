var socket = io.connect();

socket.on('sendfeed',hello=>{
    console.log(socket.id)
}); 
socket.on('send',data=>{
    console.log('uska datas')
    console.log(data)
    peer.signal(data)

});

socket.on('conn',data=>{
    console.log('connection ')
    peer.signal(data)
});

socket.on('jump',jump=>{
console.log('adsf')
idel=false
});
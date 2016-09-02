/**
 * Created by ChristopherBorum on 25/08/16.
 */
const net = require('net')

var server = net.createServer(function (socket) {
    var date = new Date()
    var y = date.getFullYear()
    var m = date.getMonth() + 1     // starts at 0
    if (m < 10)
        m = '0' + m
    var d = date.getDate()      // returns the day of month
    var h = date.getHours()
    var min = date.getMinutes()
    socket.write(y+'-'+m+'-'+d+' '+h+':'+min+'\n')
    socket.end()
})
server.listen(process.argv[2])
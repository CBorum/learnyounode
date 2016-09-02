/**
 * Created by ChristopherBorum on 25/08/16.
 */
const http = require('http')
const fs = require('fs')

var server = http.createServer(function (request, response) {
    var src = fs.createReadStream(process.argv[3])
    src.pipe(response)
})

server.listen(process.argv[2])
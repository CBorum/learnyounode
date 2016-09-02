/**
 * Created by ChristopherBorum on 27/08/16.
 */
const map = require('through2-map')
const http = require('http')

var server = http.createServer(function (request, response) {
    //if (request.method != "POST")...

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(process.argv[2])
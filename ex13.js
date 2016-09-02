/**
 * Created by ChristopherBorum on 28/08/16.
 */
const http = require('http')
const url = require('url')

var server = http.createServer(function (request, response) {
    var parsedRoute = url.parse(request.url, true)
    var date = new Date(parsedRoute.query.iso)
    var respDate = {}

    if (parsedRoute.pathname === '/api/parsetime') {
        respDate = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    } else if (parsedRoute.pathname === '/api/unixtime') {
        respDate = {
            'unixtime': date.getTime()
        }
    }
    response.end(JSON.stringify(respDate))
})

server.listen(process.argv[2])
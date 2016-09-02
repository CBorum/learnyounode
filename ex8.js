/**
 * Created by ChristopherBorum on 25/08/16.
 */

const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.pipe(bl(function (err, data) {
        if (err)
            console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))

}).on('error', console.error)
/**
 * Created by ChristopherBorum on 25/08/16.
 */
const http = require('http')
const bl = require('bl')

var result = []
var count = 0

function getFoo(index) {
    http.get(process.argv[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                console.error(err)
            result[index] = data.toString()
            count++
            if (count == 3) {
                result.forEach(function (res) {
                    console.log(res)
                })
            }
        }))
    }).on('error', console.error)
}

for (var i = 2; i<process.argv.length; i++) {
    getFoo(i)
}


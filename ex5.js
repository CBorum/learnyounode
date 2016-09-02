/**
 * Created by ChristopherBorum on 24/08/16.
 */
var fs = require('fs')

var dir = process.argv[2]
var extension = process.argv[3]

fs.readdir(dir, function (err, list) {
    list.forEach(function (entry) {
        var ext = entry.split('.')
        if (ext[1] == extension) {
            console.log(entry)
        }
    })
})
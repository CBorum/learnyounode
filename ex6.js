/**
 * Created by ChristopherBorum on 24/08/16.
 */

var myModule = require('./ex6module.js')

myModule(process.argv[2], process.argv[3], function (err, files) {
    if (err)
        console.log(err)
    files.forEach(function (file) {
        console.log(file)
    })
})
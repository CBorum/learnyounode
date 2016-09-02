/**
 * Created by ChristopherBorum on 24/08/16.
 */

var fs = require('fs')

bufferStr = fs.readFile(process.argv[2], 'utf-8', function(err, fileContents) {
    console.log(fileContents.split('\n').length-1)
})

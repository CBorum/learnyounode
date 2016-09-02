/**
 * Created by ChristopherBorum on 24/08/16.
 */

var fs = require('fs')

bufferStr = fs.readFileSync(process.argv[2]).toString()
asdf = bufferStr.split('\n')
console.log(asdf.length-1)
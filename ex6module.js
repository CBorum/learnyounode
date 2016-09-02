var path = require('path')
var fs = require('fs')

module.exports = function(dirName, extension, callback) {
    extension = '.' + extension

    fs.readdir(dirName, function (err, data) {
        if (err)
            return callback(err)
        var files = [];
        data.forEach(function (file) {
            if (path.extname(file) === extension)
                files.push(file)
        })
        return callback(null, files)
    })
}
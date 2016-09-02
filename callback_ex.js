/**
 * Created by ChristopherBorum on 29/08/16.
 */
var names = ['lars', 'jan', 'peter', 'bo', 'frederik', 'chris', 'ole']
console.log(names)
names = names.filter(function (name) {
    if (name.length <= 3) {
        return name
    }
})
console.log(names)
console.log('-----')

names = names.map(function (name) {
    return name.toUpperCase()
})
console.log(names)
console.log('-----')

names = ['lars', 'jan', 'peter', 'bo', 'frederik', 'chris', 'ole']
function myFilter(callback) {
    var newArray = []
    this.forEach(function (entity) {
        if (entity.length <= 3) {
            newArray.push(entity)
        }
    })
    callback(newArray)
}
console.log(names)
/*myFilter(names, function (newArray) {
    console.log(newArray)
})*/
console.log('-----')

function myMap(callback) {
    var newArray = []
    this.forEach(function (entity) {
        newArray.push(entity.toUpperCase())
    })
    callback(newArray)
}
console.log(names)
/*myMap(names, function (newArray) {
    console.log(newArray)
})*/
console.log('-----')

names = ['lars', 'jan', 'peter', 'bo', 'frederik', 'chris', 'ole']
Array.prototype.myFilter = myFilter

Array.prototype.myMap = myMap

names.myFilter(function (newArray) {
    console.log(newArray)
})

names.myMap(function (newArray) {
    console.log(newArray)
})
console.log('-----')

function handleNumArrays(a, b, callback) {
    var sumarray = []
    for (var i = 0; i<a.length; i++) {
        sumarray.push(a[i]+b[i])
    }
    callback(sumarray)
}
var a = [1,2,3,5,9,13,24];
var b = [1,2,3,5,9,13,24];
handleNumArrays(a,b,function(res){
    console.log(res.join(","));
})
console.log('-----')

//all declarations are always hoisted to the top
//but not initializations
asdfqwer = 123
console.log(asdfqwer)
console.log('-----')

// http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
// http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/


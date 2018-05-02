var forEachArray = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
};

var multiplyN = function (element) {
    return element = element * N;
};

var N = 3;
var arrayForEach = [1, 2, 3, 4, 5, 6, 7];

console.log('Каждое чило массива умножено на ' + N + ':');
forEachArray(arrayForEach, multiplyN);

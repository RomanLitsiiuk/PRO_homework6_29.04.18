var arrayMap = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        mapedArray.push(callback(array[i]));
    }
    return mapedArray;
};

var divideElement = function (element) {
    return element = (element / divideNum).toFixed(2);
};

var divideNum = 3;
var arrayForMap = [13, 5, 66, 2, -13, 22];
var mapedArray = [];

console.log('Каждое число в массиве разделено на ' + divideNum + ' и округлено до сотых');
console.log(arrayMap(arrayForMap, divideElement));

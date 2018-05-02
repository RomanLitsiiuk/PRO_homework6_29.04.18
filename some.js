var everyArraySome = function(array, callback) {
    var result = false;
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result = true;
            break;
        }
    }
    return result;
};

var isNegative = function (element) {
    return (element < 0);
};

var arrayForSome = [1, -4, 7, 18, 22, 55, 66];

console.log('Как минимум одно число массива отрицательное: '+ everyArraySome(arrayForSome, isNegative) + '');

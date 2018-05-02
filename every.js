var everyArrayElement = function(array, callback) {
    var result = true;
    for (var i = 0; i < array.length; i++) {
       if (callback(array[i])) {
           result = false;
           break;
       }
    }
    return result;
};

var isNatural = function (element) {
    return (element < 0 || element !== Math.round(element));
};

var arrayForEvery = [1, 22, 33, 4, 88, 21, 2];
console.log('Натуральные числа в массиве: ' + everyArrayElement(arrayForEvery, isNatural) + '');

var arrayReduce = function(array, callback) {
    var accumulator;
    var i;

    if (firstValue !== undefined && Number(firstValue)) {
        accumulator = firstValue;
        i = 0;
    } else {
        accumulator = array[0];
        i = 1;
    }

    for (i; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
};

var multipleAll = function (tank, element) {
    return tank = tank + element;
};

var firstValue;
var arrayForReduce = [1, 2, 3, 4, 5, -6, -7];

console.log('Сумма всех элементов массива равна:');
console.log(arrayReduce(arrayForReduce, multipleAll));

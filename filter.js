var arrayFilter = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

var filterWordLength = function (element) {
    return (element.length <= letters);
};

var letters = 5;
var arrayForFilter = ['самая', 'быстрая', 'машина', 'в', 'мире'];
var filteredArray = [];

console.log('Массив из слов, содержащих не более ' + letters + ' букв:');
console.log(arrayFilter(arrayForFilter, filterWordLength));

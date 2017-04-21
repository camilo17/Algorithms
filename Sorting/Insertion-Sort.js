//An efficient algorithm for sorting a small number of elements.

function insertionSort(unsortedList) {
    var len = unsortedList.length;

    for (var i = 1; i < len; i++) {
        var tmp = unsortedList[i]; //Temporary copy of the current Element

        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            //Shift the number
            unsortedList[j+ 1] = unsortedList[j];
        }
        // insert the copied number at the correct position in sorted part.
        unsortedList[j + 1] = tmp;
    }
}


var ul = [5, 3, 1, 2, 4];

insertionSort(ul);

console.log(ul);


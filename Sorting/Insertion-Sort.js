//An efficient algorithm for sorting a small number of elements.
//This algorithms sorts the number comparing right to left.
//It starts off with the second element in the array [1] and compares it with the
//first one [0]


function insertionSort(unsortedList) {

    var len = unsortedList.length;

    for (var i = 1; i < len; i++) {
        var tmp = unsortedList[i]; //Temporary copy of the current Element

        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            //Shift the number
            unsortedList[j+ 1] = unsortedList[j];// Because J is greater than I, it is put in it takes the position of I.
        }
        // insert the copied number at the correct position in sorted part.
        unsortedList[j + 1] = tmp;
        // j + 1 because in the loop it was decreased by one already, so leaving it as
        // it is would replace the shift that we did.
    }
}


var ul = [5, 3, 1, 2, 4];

insertionSort(ul);

console.log(ul);


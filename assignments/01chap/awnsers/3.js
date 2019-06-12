// maximum
function aMax(arr) {
    var ln = arr.length;
    var max = -Infinity;
    while (ln--) {
        if (arr[ln] > max) {
            max = arr[ln];
        }
    }
    return max;
}
// minimum
function aMin(arr) {
    var ln = arr.length;
    var min = Infinity;
    while (ln--) {
        if (arr[ln] > min) {
            min = arr[ln];
        }
    }
    return min;
}

function minNmax(arr) {
    return {
        min: aMin(arr),
        max: aMax(arr)
    }
}
var arrayNumbers = [];
var newArray = [];

function starting() {
    arrayNumbers = [];
    newArray = [];
    document.getElementById("startarray").innerHTML = "";
    document.getElementById("resultarray").innerHTML = "";

    var arr = Number(document.getElementById("arraylength").value);

    createArray(arr);
}

function createArray(arr) {
    for (var i = 0, t = arr; i < t; i++) {
        var y;
        if (i % 2 == 0) {
            y = -1;
        }
        else {
            y = 1;
        }
        arrayNumbers.push(Math.floor(Math.random() * 101) * y);
    }

    var printThis = "";
    for (var i = 0; i < arrayNumbers.length; i++) {
        printThis += arrayNumbers[i] + ",";
    }
    document.getElementById("startarray").innerHTML = "<h3>" + printThis + "</h3>";
}

function bubbleSort() {
    for (var i = 0; i < arrayNumbers.length - 1; i++) {
        if (arrayNumbers[i] > arrayNumbers[i + 1]) {
            var temp = arrayNumbers[i];
            arrayNumbers[i] = arrayNumbers[i + 1];
            arrayNumbers[i + 1] = temp;
        }
    }
}

function processing() {
    var sortspeed = Number(document.getElementById("sortspeed").value);
    setInterval(function () {
        bubbleSort();
        document.getElementById("resultarray").innerHTML = "<h3 class='current'>" + arrayNumbers + "</h3>";
    }, sortspeed)
}
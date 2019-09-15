// Създаваме необходимите работни променливи
let printThis = 0;
let sum =0;
let count = 0;

function start() {
    // Изчитаме въведеното от потребителя число
    let choice = Number(document.getElementById("choice").value);

    // Ако числоно е различно от нула, обработваме го
    if (choice != 0) {
        sum += choice; // увеличаваме сумата с въведеното
        count++; // увеличаваме стъпката на брояча с единица

        // Извеждаме на екран междинната сума и брояча
        document.getElementById("sum").value =  sum;
        document.getElementById("count").value =  count;
        document.getElementById("choice").value =  "";
    }
    else { // ако потребителя въведе нула, извикваме функцията за край
        finish();
    }
}

// Функцията за край изчислява средно-аритметичната стойност
// и я извежда на екран по обичайния начин.
function finish() {
    printThis = sum / count;
    document.getElementById("result").innerHTML = "<h3>" + sum +
        " / " + count + " = " + printThis + "</h3>";
}

// Функцията за ресет нулира променливите и почиства формите
function reset() {
    printThis = 0;
    sum = 0;
    count = 0;
    document.getElementById("sum").value =  "";
    document.getElementById("count").value =  "";
    document.getElementById("choice").value =  "";
    document.getElementById("result").innerHTML = '';
}
// Дефинираме нов празен масив
let newArray = [];

function createArray(arr) {
    for (var i = 0, t = arr; i < t; i++) {

        newArray.push(Math.floor(Math.random() * 101));
    }
}

/*
В отделна функция изнасяма логика за генериране
на масив от случайни числа.
 */
function start() {
    // Изчитаме потребителския вход
    let arr = Number(document.getElementById("arr").value);
    let who = Number(document.getElementById("who").value);
    // Подаваме числото на потребителя към функцията за нов масив
    createArray(arr);

    // Формираме стринг, съдържащ новосъздадения масив
    let printThis = "";
    for (var i = 0; i < newArray.length; i++) {
        printThis += newArray[i] + " ";
    }

    // Показваме масива на потребителя
    document.getElementById("array").innerHTML = "<h3>" + printThis + "</h3>";

    // Създаваме си променлива за резултата
    let x = 0;

    /*
    Изпълнението се разклонява в зависимост от избора на потребителя
    в HTML потребителския интерфейс. В зависимост от желанието на
    потребителя се намира най-малкия или най-големия елемент в масива.
     */
    if (who == 1) {
        x = getMax(newArray);
    }
    else {
        x = getMin(newArray);
    }

    // Показваме резултата в браузъра
    document.getElementById("result").innerHTML = "<h3>" + x + "</h3>";

    // Зануляваме масива
    newArray = [];
}

// Функция за намиране на най-големия елемент в масива
function getMax(arr) {
    return Math.max.apply(null, arr);
}

// Функция за намиране на най-малкия елемент в масива
function getMin(arr) {
    return Math.min.apply(null, arr);
}
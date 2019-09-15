// Дефинираме нов празен масив
let newArray = [];

/*
В отделна функция изнасяма логика за генериране
на масив от случайни числа.
 */
function createArray(arr) {
    for (var i = 0, t = arr; i < t; i++) {

        newArray.push(Math.floor(Math.random() * 101));
    }
}

function start() {
    // Изчитаме потребителския вход
    let arr = Number(document.getElementById("arr").value);
    // Подаваме числото на потребителя към функцията за нов масив
    createArray(arr);

    // Формираме стринг, съдържащ новосъздадения масив
    let printThis = "";
    for (var i = 0; i < newArray.length; i++) {
        printThis += newArray[i] + " ";
    }

    // Показваме масива на потребителя
    document.getElementById("array").innerHTML = "<h3>" + printThis + "</h3>";

    // Създаваме си променлива за сумата на елементите на масива
    let x = 0;

    // Добавяме елементите на масива един по един в променливата
    for (var i in newArray) {
        x += newArray[i];
    }

    // Извеждаме резултата от изчисленията в браузъра
    document.getElementById("result").innerHTML = "<h3>" + x + "</h3>";

    // Зачистваме съдържанието на масива
    newArray = [];
}
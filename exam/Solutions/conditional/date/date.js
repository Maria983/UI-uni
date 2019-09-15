// Отделяме в отделна функция логиката за изчисляване броя на дните в месеца
let getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
}

function start() {
    // Дефинираме работни променливи
    let printThis = "";
    let monthName = "";

    // Обработваме потребителскяия вход
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    /*
    Присвояваме българското име на месеца на съответната променлива
    в зависимост от въведеното от потребителя
     */

    if (month == 1) {
        monthName = "Януари";
    }
    else if (month == 2) {
        monthName = "Февруари";
    }
    else if (month == 3) {
        monthName = "Март";
    }
    else if (month == 4) {
        monthName = "Април";
    }
    else if (month == 5) {
        monthName = "Май";
    }
    else if (month == 6) {
        monthName = "Юни";
    }
    else if (month == 7) {
        monthName = "Юли";
    }
    else if (month == 8) {
        monthName = "Август";
    }
    else if (month == 9) {
        monthName = "Септември";
    }
    else if (month == 10) {
        monthName = "Октомври";
    }
    else if (month == 11) {
        monthName = "Ноември";
    }
    else if (month == 12) {
        monthName = "Декември";
    }

    // Формираме съобщението за потребителя с резултатите
    printThis += monthName;
    printThis += " има ";
    printThis += getDaysInMonth(month, year);
    printThis += " дни.";

    // Извеждаме съобщението в браузъра
    document.getElementById("result").innerHTML = "<h3>" + printThis + "</h3>";
}
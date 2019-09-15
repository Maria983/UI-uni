function start() {

    // Дефинираме си работни променливи за изхода и корените на уравнението
    let printThis = "";
    let x1 = 0;
    let x2 = 0;

    // Изчитаме потребителския вход за трите параметъра на уравнението
    let paramA = Number(document.getElementById("paramA").value);
    let paramB = Number(document.getElementById("paramB").value);
    let paramC = Number(document.getElementById("paramC").value);

    // Изчисляваме дискриминантата
    let discriminant = Math.pow(paramB, 2) - 4 * paramA * paramC;

    /*
    За целите на примера изпълнението се разклонява в зависимост от стойността на
    дискриминантата.
    Формираме различни съобщения в зависимост от това дали тя е положителна,
    нулева или отрицателна.
     */
    if (discriminant > 0) {
        x1 = (-paramB + Math.sqrt(discriminant)) / ( 2 * paramA);
        x2 = (-paramB - Math.sqrt(discriminant)) / ( 2 * paramA);

        printThis += "При зададените параметри стойността на дискриминантата е " +
            Number(discriminant).toFixed(2) + "<br>";
        printThis += "Уравнението има два реални корена: " + Number(x1).toFixed(2) +
            " и " + Number(x2).toFixed(2) + "<br>";
        printThis += "Графиката на функцията пресича абсцисната ос<br>";
        printThis += "в точки с координати A(" + Number(x1).toFixed(2) +
            ", 0) и B(" + Number(x2).toFixed(2) + ", 0)<br>";
        printThis += "Нейният връх е в точка с координати (" +
            Number(-paramB / (2 * paramA)).toFixed(2) +", " +
            Number(-discriminant / (4 * paramA)).toFixed(2) + ")";
    }
    else if (discriminant == 0) {
        x1 = (-paramB + Math.sqrt(discriminant)) / ( 2 * paramA);

        printThis += "При зададените параметри стойността на дискриминантата е " +
            Number(discriminant).toFixed(2) + "<br>";
        printThis += "Уравнението има един реален корен: " +
            Number(x1).toFixed(2) + "<br>";
        printThis += "Графиката на функцията допира абсцисната ос<br>";
        printThis += "в точка с координати (" + Number(x1).toFixed(2) + ", 0)<br>";

    }
    else {
        printThis += "При зададените параметри стойността на дискриминантата е " +
            Number(discriminant).toFixed(2) + "<br>";
        printThis += "Уравнението няма реални корени. <br>";
        printThis += "Графиката на функцията е с връх в точка с координати (" +
            Number(-paramB / (2 * paramA)).toFixed(2) +", " +
            Number(-discriminant / (4 * paramA)).toFixed(2) + ")";
    }

    // Извеждаме съобщението с резултатите от изчисленията
    document.getElementById("result").innerHTML = "<h3>" + printThis + "</h3>";
}    
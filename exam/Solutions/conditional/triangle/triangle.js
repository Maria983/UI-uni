function start() {
    // Дефинираме си променлива от тип стринг за извеждане съобщения на екран
    let printThis = "";

    // Изчитаме потребителския вход за трите страни
    let sideA = Number(document.getElementById("sideA").value);
    let sideB = Number(document.getElementById("sideB").value);
    let sideC = Number(document.getElementById("sideC").value);

    /*
    Първо проверяваме дали е в Евклидовата геометрия е възможен такъв триъгълник.
    Правилото е сборът от дължините на всеки две страни да е по-голям от третата.
    Ако е възможен, проверяваме последователно за равенство на трите страни или
    за равенство на две страни.
     */

    if (!(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA)) {
        printThis += "Триъгълник със страни ";
        printThis += sideA;
        printThis += ", ";
        printThis += sideB;
        printThis += " и ";
        printThis += sideC;
        printThis += " не съществува."
    }
    else if (sideA == sideB && sideB == sideC && sideC == sideA) {
        printThis += "Триъгълник със страни ";
        printThis += sideA;
        printThis += ", ";
        printThis += sideB;
        printThis += " и ";
        printThis += sideC;
        printThis += " съществува и е равностранен."
    }
    else if (sideA == sideB || sideB == sideC || sideC == sideA) {
        printThis += "Триъгълник със страни ";
        printThis += sideA;
        printThis += ", ";
        printThis += sideB;
        printThis += " и ";
        printThis += sideC;
        printThis += " съществува и е равнобедрен."
    }
    else {
        printThis += "Триъгълник със страни ";
        printThis += sideA;
        printThis += ", ";
        printThis += sideB;
        printThis += " и ";
        printThis += sideC;
        printThis += " съществува и е разностранен."
    }

    // Извеждаме резултата от проверките в браузъра.
    document.getElementById("result").innerHTML = "<h3>" + printThis + "</h3>";
}
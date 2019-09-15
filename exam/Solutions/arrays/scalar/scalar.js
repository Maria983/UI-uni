/*
Функция за създаване на масив от случайни числа.
Приема като аргументи брой елементи и име на масив
 */
function createArray(arr, name) {
    for (var i = 0, t = arr; i < t; i++) {

        name.push(Math.floor(Math.random() * 101));
    }
}

function start() {
    // Изчитаме въведеното от потребителя
    let arr = Number(document.getElementById("arr").value);

    // Декларираме три празни масива
    let newArray0 = [];
    let newArray1 = [];
    let newArray2 = [];

    // Създаваме и останалине работни променливи
    let printThis = "";
    let scalar = 0;

    /*
    Подаваме първите два масива на функцията за създаване на
    масиви със случайни стойности със съответните имена
    Тук просто създаваме масиви с еднаква размерност
     */
    createArray(arr, newArray0);
    createArray(arr, newArray1);

    // Съставяме стрринг, съдържащ елементите на първия масив
    printThis = "";
    for (var i = 0; i < newArray0.length; i++) {
        printThis += newArray0[i] + " ";
    }

    // Показваме първия масив в браузъра
    document.getElementById("array0").innerHTML = "<h3>" + printThis + "</h3>";


    // Формираме стринг, съдържащ втория масив
    printThis = "";
    for (var i = 0; i < newArray1.length; i++) {
        printThis += newArray1[i] + " ";
    }

    // Извеждаме на екран втория масив
    document.getElementById("array1").innerHTML = "<h3>" + printThis + "</h3>";


    // Третия масив се създава с няколко операции
    printThis = "";
    for (var i = 0; i < newArray0.length; i++) {
        /*
        Формираме елементите на третия масив като сбор
         от съответните елементи на първите два масива
         */
        newArray2[i] = newArray0[i] + newArray1[i];
        // Формираме стринг за извеждане на егран от елементите на третия масив
        printThis += newArray2[i] + " ";

        /* Изисляваме скаларното произведение с натрупване
        Обърнете внимание на плюса преди newArray0[i]
        Без него тоя идиот JS ще лепи едно зад друго числата като букви*/
        scalar += +newArray0[i] * newArray1[i];
    }

    // Показваме третия масив в браузъра
    document.getElementById("array2").innerHTML = "<h3>" + printThis + "</h3>";

    // Показваме скаларното произведение
    document.getElementById("result").innerHTML = "<h3>" + scalar + "</h3>";
    newArray = [];
}
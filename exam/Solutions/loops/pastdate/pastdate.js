function start() {
    // Изчитаме въведеното от потребителя
    let days = Number(document.getElementById("days").value);
    // За датата създаваме обект от тип Date()
    let date = new Date(document.getElementById("date").value);

    // Вадим от датата толкова дни, колкото е въвел потребителя
    date.setDate(date.getDate()-days)

    /*
    Пишем в браузъра получената дата форматирана според
     правилата за българска локализация
     */
    document.getElementById("result").innerHTML = "<h3>" +
        date.toLocaleDateString("bg-BG") + "</h3>";
}
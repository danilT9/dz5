const answer = prompt("Що ви бажаєте?");
switch (answer.toLocaleLowerCase()) {
    case "кава":
        alert("Ви обрали каву. Чудовий вибір!");
        break;
    case "чай":
        alert("Ви обрали чай. Чудовий вибір!");
        break;
    case "сік":
        alert("Ви обрали сік. Чудовий вибір!");
        break;
    default:
        alert("Вашого напою немає в списку");
}



const day = prompt("Введіть день тижня:");
// if (day.toLowerCase() == "понеділок" || day.toLowerCase() == "вівторок" || day.toLowerCase() == "середа" || day.toLowerCase() == "четвер" || day.toLowerCase() == "п'ятниця") {
//     alert("Сьогодні робочий день");
// } else if (day.toLowerCase() == "субота" || day.toLowerCase() == "неділя") {
//     alert("Сьгодні вихідний");
// } else {
//     alert("Немає такого дня");
// }

switch (day.toLowerCase()) {
    case "понеділок":
        alert("Сьогодні робочий день");
        break;
    case "вівторок":
        alert("Сьогодні робочий день");
        break;
    case "середа":
        alert("Сьогодні робочий день");
        break;
    case "четвер":
        alert("Сьогодні робочий день");
        break;
    case "п'ятниця":
        alert("Сьогодні робочий день");
        break;
    case "субота":
        alert("Сьгодні вихідний");
        break;
    case "неділя":
        alert("Сьгодні вихідний");
        break;
    default:
        alert("Немає такого дня");
}



const monthNumber = Number(prompt("Номер місяця:"));
// if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
//     alert("Це зима");
// } else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
//     alert("Це весна");
// } else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
//     alert("Це літо");
// } else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
//     alert("Це осінь");
// } else {
//     alert("Немає такого місяця");
// }

switch (monthNumber) {
    case 12:
        alert("Це зима");
        break;
    case 1:
        alert("Це зима");
        break;
    case 2:
        alert("Це зима");
        break;
    case 3:
        alert("Це весна");
        break;
    case 4:
        alert("Це весна");
        break;
    case 5:
        alert("Це весна");
        break;
    case 6:
        alert("Це літо");
        break;
    case 7:
        alert("Це літо");
        break;
    case 8:
        alert("Це літо");
        break;
    case 9:
        alert("Це осінь");
        break;
    case 10:
        alert("Це осінь");
        break;
    case 11:
        alert("Це осінь");
        break;
    default:
        alert("Немає такого місяця");
}


const color = prompt("Введіть назву кольору:");
// if (color.toLowerCase() == "червоний") {
//     alert("Стоп!");
// } else if (color.toLowerCase() == "зелений") {
//     alert("Йти");
// } else if (color.toLowerCase() == "жовтий") {
//     alert("Чекати");
// } else {
//     alert("Невідомий колір");
// }

switch (color.toLowerCase()) {
    case "червоний":
        alert("Стоп!");
        break;
    case "зелений":
        alert("Йти");
        break;
    case "жовтий":
        alert("Чекати");
        break;
    default:
        alert("Невідомий колір");
}


const number1 = Number(prompt("Число 1:"));
const number2 = Number(prompt("Число 2:"));
const operator = prompt("Введіть оператора:");
// if (operator == "*") {
//     alert(number1 * number2);
// } else if (operator == "/" || operator == ":") {
//     alert(number1 / number2);
// } else if (operator == "+") {
//     alert(number1 + number2);
// } else if (operator == "-") {
//     alert(number1 - number2);
// } else {
//     alert("Такого оператора не існує");
// }

switch (operator) {
    case "*":
        alert(number1 * number2);
        break;
    case "/":
        alert(number1 / number2);
        break;
    case ":":
        alert(number1 / number2);
        break;
    case "+":
        alert(number1 + number2);
        break;
    case "-":
        alert(number1 - number2);
        break;
    default:
        alert("Такого оператора не існує");
}

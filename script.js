document.getElementById('money').value = 0 + "$"; //первоначальное значение в input
document.getElementById('value').value = "+" + 1 + "$";
document.getElementById('firstup').value = 10 + "$";
document.getElementById('secondup').value = 20 + "$";
document.getElementById('thirdup').value = 30 + "$";

var plus = 1, //количество денег, прибавляющееся на клик
    money = 0, //Общее количество денег
    FirstCost = 10, //Изначальная цена улучшения
    FirstValue = 1,//Изначальное значение приращение
    SecondCost = 20,
    SecondValue = 2,
    ThirdCost = 30,
    ThirdValue = 3,
    MoneyPerSecond = 0, //доход в секунду
    i = 0, //счётчики
    i1 = 0,
    i2 = 0;


function clicking() {  //функцйия клика

    money = money + plus;
    document.getElementById('money').value = money + "$";

}

function update(x) { //обновление значений

    document.getElementById('money').value = money + "$";
    document.getElementById('value').value = "+" + plus + "$";
    MoneyPerSecond = MoneyPerSecond + x
    document.getElementById('persecond').value = "+" + MoneyPerSecond + "$";

}

function error() { //сообщение о нехватке ресурса

    document.getElementById('error').innerHTML = '<p style="color: red">Недостаточно денег</p>'

    setTimeout(cancel, 1000);

}

function block() { //функция блокировки

    document.getElementById('error').innerHTML = '<p style="color: red">Заблокировано</p>'

    setTimeout(cancel, 1000);

}

function cancel() { //для остановки error и block

    document.getElementById('error').innerHTML = '<p>Владос-падос</p>';

}

function count(x, y) {  //расчёт увеличения цены

    return x = x + Math.round(1.07 ** y);

}

function upgrade1() {   //улучшение 1

    if (money >= FirstCost) {
        money = money - FirstCost
        plus = plus + FirstValue
        i = i + 1;
        FirstCost = count(FirstCost, i)
        document.getElementById('firstup').value = FirstCost + "$";
        update(1);
    } else {
        error()
    }

}

function upgrade2() {   //Улучшение 2
    if (i > 0) {
        if (money >= SecondCost) {
            money = money - SecondCost
            plus = plus + SecondValue
            i1 = i1 + 1;
            SecondCost = count(SecondCost, i1)
            document.getElementById('secondup').value = SecondCost + "$";
            update(3);
        } else {
            error()
        }
    } else {
        block()
    }

}
function upgrade3() {   //улучшение 3

    if (i1 > 0) {
        if (money >= ThirdCost) {
            money = money - ThirdCost
            plus = plus + ThirdValue
            i2 = i2 + 1;
            ThirdCost = count(ThirdCost, i2)
            document.getElementById('thirdup').value = ThirdCost + "$";
            update(7);
        } else {
            error()
        }
    } else {
        block()
    }

}

let timerId = setInterval(() => persecond(), 1000); //Интервал для дохода в ед. времени

function persecond() {  //Доход в секунду

    money = money + MoneyPerSecond
    document.getElementById('money').value = money + "$"

}
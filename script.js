document.getElementById('money').value = 0 + "$";                           //первоначальные значения в input
document.getElementById('value').value = "+" + 1 + "$";
document.getElementById('firstup').value = 10 + "$";
document.getElementById('secondup').value = 20 + "$";
document.getElementById('thirdup').value = 30 + "$";

var MoneyPerClick = 1,                                                      //количество денег, прибавляющееся на клик
    Money = 0,                                                              //Общее количество денег
    FirstCost = 10,                                                         //Изначальные цены улучшений
    SecondCost = 20,
    ThirdCost = 30,
    FirstValue = 1,                                                         //Изначальные значения приращения клика
    SecondValue = 2,
    ThirdValue = 3,
    MoneyPerSecond = 0,                                                     //доход в секунду
    Level_of_fist_upgrade = 0,                                              //счётчики колтичества апгрейдов юнита
    Level_of_second_upgrade = 0,
    Level_of_third_upgrade = 0,
    index,                                                                  //индекс апгрейда
    ValueOfPerSecond                                                        //увеличение прироста в секунду юнита       


function clicking() {                                                       //функцйия нажатия на кнопку клика

    Money = Money + MoneyPerClick;
    document.getElementById('money').value = Money + "$";

}

let timerId = setInterval(() => persecond(), 1000);                         //Интервал времени

function persecond() {                                                      //Доход в секунду

    Money = Money + MoneyPerSecond
    document.getElementById('money').value = Money + "$"

}

function error() {                                                          //сообщение о нехватке ресурса

    document.getElementById('error').innerHTML = '<p style="color: red">Недостаточно денег</p>'

    setTimeout(cancel, 1000);

}

function cancel() {                                                         //для того, чтобы убрать сообщение об ошибке

    document.getElementById('error').innerHTML = '<p>Владос-падос</p>';

}

function count(Cost, Owned) {                                               //расчёт увеличения цены юнита по формуле

    return Cost = Cost + Math.round(1.07 ** Owned);

}

function update(Cost, Value, Level, PerSecondValue, index) {                //функция апгрейда

    if (Money >= Cost) {

        Money = Money - Cost
        MoneyPerClick = MoneyPerClick + Value
        Level++
        Cost = count(Cost, Level)
        document.getElementById('money').value = Money + "$";
        document.getElementById('value').value = "+" + MoneyPerClick + "$";
        MoneyPerSecond = MoneyPerSecond + PerSecondValue
        document.getElementById('persecond').value = "+" + MoneyPerSecond + "$";

        switch (index) {
            case 1:
                FirstCost = Cost;
                document.getElementById('firstup').value = FirstCost + "$";
                break;
            case 2:
                SecondCost = Cost;
                document.getElementById('secondup').value = SecondCost + "$";
                break;
            case 3:
                ThirdCost = Cost;
                document.getElementById('thirdup').value = ThirdCost + "$";
                break;

        }
    } else {
        error()
    }
}

function upgrade1() {                                                           //апгрейды

    index = 1;
    ValueOfPerSecond = 1;
    update(FirstCost, FirstValue, Level_of_fist_upgrade, ValueOfPerSecond, index);

}

function upgrade2() {

    index = 2
    ValueOfPerSecond = 3
    update(SecondCost, SecondValue, Level_of_second_upgrade, ValueOfPerSecond, index);

}

function upgrade3() {

    index = 3
    ValueOfPerSecond = 7
    update(ThirdCost, ThirdValue, Level_of_third_upgrade, ValueOfPerSecond, index);

}
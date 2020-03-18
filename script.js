'use strict'

var MoneyPerClick = 1,                                                      //количество денег, прибавляющееся на клик
    Money = 0,                                                              //Общее количество денег
    MoneyPerSecond = 0,                                           
    index,                                                                  //индекс апгрейда
    ValueOfPerSecond;

function clicking() {                                                       //функцйия нажатия на кнопку клика

    Money = Money + MoneyPerClick;
    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'

}

let timerId = setInterval(() => persecond(), 1000);                         //Интервал времени

function persecond() {                                                      //Доход в секунду

    Money = Money + MoneyPerSecond
    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'

}

function error() {                                                          //сообщение о нехватке ресурса

    document.getElementById('error').innerHTML = '<p style="color: red">Недостаточно денег</p>'

    setTimeout(cancel, 1000);

}

function cancel() {                                                         //для того, чтобы убрать сообщение об ошибке

    document.getElementById('error').innerHTML = '<p>Кликай кнопку</p>';

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
        document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'
        MoneyPerSecond = MoneyPerSecond + PerSecondValue
        document.getElementById('persecond').innerHTML = '<p>+' + MoneyPerSecond + '$</p>'

        switch (index) {
            case 1:
                Level_of_fist_upgrade++;
                FirstCost = Cost;
                document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'
                break;
            case 2:
                Level_of_second_upgrade++;
                SecondCost = Cost;
                document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'
                break;
            case 3:
                Level_of_third_upgrade++;
                ThirdCost = Cost;
                document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'
                break;

        }
    } else {
        error()
    }
}

var FirstCost = 10, 
    FirstValue = 1,
    Level_of_fist_upgrade = 0;       

function upgrade1() {                                                        

    index = 1;
    ValueOfPerSecond = 1;
    update(FirstCost, FirstValue, Level_of_fist_upgrade, ValueOfPerSecond, index);

}

var SecondCost = 20,
    SecondValue = 2,
    Level_of_second_upgrade = 0;


function upgrade2() {

    index = 2
    ValueOfPerSecond = 3
    update(SecondCost, SecondValue, Level_of_second_upgrade, ValueOfPerSecond, index);

}

var ThirdCost = 30,
    ThirdValue = 3,
    Level_of_third_upgrade = 0;

function upgrade3() {

    index = 3
    ValueOfPerSecond = 7
    update(ThirdCost, ThirdValue, Level_of_third_upgrade, ValueOfPerSecond, index);

}

    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'    //первоначальные значения в input
    document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'
    document.getElementById('persecond').innerHTML = '<p>+' + MoneyPerSecond + '$</p>'
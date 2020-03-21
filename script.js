'use strict'

var MoneyPerClick = 1,                                                      //количество денег, прибавляющееся на клик
    Money = 0,                                                              //Общее количество денег
    MoneyPerSecond = 0,
    TimeCost = 100,                                                          // стоимость ускорения                                    
    index,                                                                  //индекс апгрейда
    ValueOfPerSecond;

var i = 1

function clicking() {                                                       //функцйия нажатия на кнопку клика

    Money = Money + MoneyPerClick;
    document.getElementById('money').innerHTML = '<p>' + num(Money) + '$</p>'

}

function num(x){
    if (x < 1000){
            return x;
    }
    if (x >= 1000 && x < 1000000){
            x = x/1000;
            x = Math.floor(x * 100) / 100; 
            return (x + "k")
    }
    if (x >= 1000000 && x < 1000000000) {
        x = x/1000000;
        x = Math.floor(x * 100) / 100; 
        return (x + "M")
    }
    if (x >= 1000000000 && x < 1000000000000) {
        x = x/1000000000;
        x = Math.floor(x * 100) / 100; 
        return (x + "B")
    }
}

var time = 1000;
var Level_Of_TimerUpgrade = 0;
var identity = 1 //для идентификации работы таймера

function TimerUpgrade(){  //Ускоряет время на 30 секунд

    if(identity !== 0){
        if (Money >= TimeCost && identity !== 0){

            Money = Money - TimeCost
            TimeCost = TimeCost*2

            clearInterval(timerId);
            timerId = setInterval(() => persecond(), 500);

            setTimeout(back, 30000); //возвращает старый интервал через 30 секунд
            setTimeout(timer, 0); //запуск таймера

            var T = 29 //обратный отсчёт от 29

        function timer(){
        
                var TimerID_for_timer = setInterval(() => otschet(), 1000);
                function otschet(){
                    identity = 0;
                    document.getElementById('TimeCost').innerHTML = T;
                    T = T - 1;
                    if (T < 0){
                        identity = 1;
                        clearInterval(TimerID_for_timer);
                        document.getElementById('TimeCost').innerHTML = '<p>' + TimeCost + '$</p>'
                    }
                }
            }

            function back(){
                clearInterval(timerId);
                timerId = setInterval(() => persecond(), time);
            }
        }else{
            error(1)
        }   
    }else{
        error(2)   
    } 
}

var timerId = setInterval(() => persecond(), time);

function persecond() {                                                      //Доход в секунду

    Money = Money + MoneyPerSecond
    document.getElementById('money').innerHTML = '<p>' + num(Money) + '$</p>' 

}

function error(x) {                                                          //сообщение о нехватке ресурса

    switch (x){
        case 1: document.getElementById('error').innerHTML = '<p style="color: red">Недостаточно денег</p>'
        break;
        case 2: document.getElementById('error').innerHTML = '<p style="color: red">цикл уже запущен</p>'
        break
    }

    setTimeout(cancel, 1000);

    function cancel() {                                                         //для того, чтобы убрать сообщение об ошибке

        document.getElementById('error').innerHTML = '<p>Кликай кнопку</p>';
    
    }

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
        document.getElementById('money').innerHTML = '<p>' + num(Money) + '$</p>'
        MoneyPerSecond = MoneyPerSecond + PerSecondValue
        document.getElementById('persecond').innerHTML = '<p>+' + num(MoneyPerSecond) + '$</p>'
        document.getElementById('ValueOfClick').innerHTML = '<p>+' + num(MoneyPerClick) + '$</p>'

        switch (index) {
            case 1:
                FirstCost = Cost;
                document.getElementById('lvl_1').innerHTML = '<p>X' + Level + '</p>'
                break;
            case 2:
                SecondCost = Cost;
                document.getElementById('lvl_2').innerHTML = '<p>X' + Level + '</p>'
                break;
            case 3:
                ThirdCost = Cost;
                document.getElementById('lvl_3').innerHTML = '<p>X' + Level + '</p>'
                break;
            case 4:
                FourthCost = Cost;
                document.getElementById('lvl_4').innerHTML = '<p>X' + Level + '</p>'
                break
        }
    } else {
        error(1)
    }
}

var FirstCost = 10, 
    FirstValue = 1,
    Level_of_fist_upgrade = 0;       

function upgrade1() {                                                                  //апгрейды

    index = 1;
    ValueOfPerSecond = 1;
    update(FirstCost, FirstValue, Level_of_fist_upgrade, ValueOfPerSecond, index);
    Level_of_fist_upgrade++;
    document.getElementById('firstup').innerHTML = '<p>' + num(FirstCost) + '$</p>'

}

var SecondCost = 20,
    SecondValue = 2,
    Level_of_second_upgrade = 0;


function upgrade2() {

    index = 2
    ValueOfPerSecond = 3
    update(SecondCost, SecondValue, Level_of_second_upgrade, ValueOfPerSecond, index);
    Level_of_second_upgrade++;
    document.getElementById('secondup').innerHTML = '<p>' + num(SecondCost) + '$</p>'

}

var ThirdCost = 30,
    ThirdValue = 3,
    Level_of_third_upgrade = 0;

function upgrade3() {

    index = 3
    ValueOfPerSecond = 7
    update(ThirdCost, ThirdValue, Level_of_third_upgrade, ValueOfPerSecond, index);
    Level_of_third_upgrade++;
    document.getElementById('thirdup').innerHTML = '<p>' + num(ThirdCost) + '$</p>'

}

var FourthCost = 70,
    FourthValue = 10,
    Level_of_fourth_upgrade = 0;

function upgrade4() {

    index = 4
    ValueOfPerSecond = 15
    update(FourthCost, FourthValue, Level_of_fourth_upgrade, ValueOfPerSecond, index);
    Level_of_fourth_upgrade++;
    document.getElementById('fourthup').innerHTML = '<p>' + num(FourthCost) + '$</p>'

}

    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'    //первоначальные значения в input
    document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'
    document.getElementById('fourthup').innerHTML = '<p>' + FourthCost + '$</p>'
    document.getElementById('persecond').innerHTML = '<p>+' + MoneyPerSecond + '$</p>'
    document.getElementById('ValueOfClick').innerHTML = '<p>+' + MoneyPerClick + '$</p>'
    document.getElementById('TimeCost').innerHTML = '<p>' + TimeCost + '$</p>'








Upgrades_val
function X1(){
    document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + FourthCost + '$</p>'
}

function X5(){
    document.getElementById('firstup').innerHTML = '<p>' + 5 * FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + 5 * SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + 5 * ThirdCost + '$</p>'
}

function X10(){
    document.getElementById('firstup').innerHTML = '<p>' + 10 * FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + 10 * SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + 10 * ThirdCost + '$</p>'
}
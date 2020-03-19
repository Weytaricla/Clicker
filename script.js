'use strict'

var MoneyPerClick = 1,                                                      //количество денег, прибавляющееся на клик
    Money = 0,                                                              //Общее количество денег
    MoneyPerSecond = 0,
    TimeCost = 100,                                                          // стоимость ускорения                                    
    index,                                                                  //индекс апгрейда
    ValueOfPerSecond;

function clicking() {                                                       //функцйия нажатия на кнопку клика

    Money = Money + MoneyPerClick;
    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'

}

var time = 1000;
var Level_Of_TimerUpgrade = 0;
var identity = 0 //для идентификации работы таймера

function TimerUpgrade(){  //Ускоряет время на 30 секунд

    identity = 1

    if (Money >= TimeCost){

        Money = Money - TimeCost
        Level_of_fist_upgrade++
        TimeCost = count(TimeCost, Level_of_fist_upgrade)

        clearInterval(timerId);
        timerId = setInterval(() => persecond(), 500);

        setTimeout(back, 30000); //возвращает старый интервал через 30 секунд
        setTimeout(timer, 0); //запуск таймера

        var T = 29 //обратный отсчёт от 29

        function timer(){
        
            var TimerID_for_timer = setInterval(() => otschet(), 1000);
            function otschet(){
                document.getElementById('TimeCost').innerHTML = T;
                T = T - 1;
                if (T < 0){
                    identity = 0;
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
        error()
    }    
}

var timerId = setInterval(() => persecond(), time);

function persecond() {                                                      //Доход в секунду

    Money = Money + MoneyPerSecond
    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>' 

}

function error() {                                                          //сообщение о нехватке ресурса

    document.getElementById('error').innerHTML = '<p style="color: red">Недостаточно денег</p>'

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
        document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'
        MoneyPerSecond = MoneyPerSecond + PerSecondValue
        document.getElementById('persecond').innerHTML = '<p>+' + MoneyPerSecond + '$</p>'
        document.getElementById('ValueOfClick').innerHTML = '<p>+' + MoneyPerClick + '$</p>'

        switch (index) {
            case 1:
                FirstCost = Cost;
                break;
            case 2:
                SecondCost = Cost;
                break;
            case 3:
                ThirdCost = Cost;
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
    Level_of_fist_upgrade++;
    document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'

}

var SecondCost = 20,
    SecondValue = 2,
    Level_of_second_upgrade = 0;


function upgrade2() {

    index = 2
    ValueOfPerSecond = 3
    update(SecondCost, SecondValue, Level_of_second_upgrade, ValueOfPerSecond, index);
    Level_of_second_upgrade++;
    document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'

}

var ThirdCost = 30,
    ThirdValue = 3,
    Level_of_third_upgrade = 0;

function upgrade3() {

    index = 3
    ValueOfPerSecond = 7
    update(ThirdCost, ThirdValue, Level_of_third_upgrade, ValueOfPerSecond, index);
    Level_of_third_upgrade++;
    document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'

}

    document.getElementById('money').innerHTML = '<p>' + Money + '$</p>'    //первоначальные значения в input
    document.getElementById('firstup').innerHTML = '<p>' + FirstCost + '$</p>'
    document.getElementById('secondup').innerHTML = '<p>' + SecondCost + '$</p>'
    document.getElementById('thirdup').innerHTML = '<p>' + ThirdCost + '$</p>'
    document.getElementById('persecond').innerHTML = '<p>+' + MoneyPerSecond + '$</p>'
    document.getElementById('ValueOfClick').innerHTML = '<p>+' + MoneyPerClick + '$</p>'
    document.getElementById('TimeCost').innerHTML = '<p>' + TimeCost + '$</p>'
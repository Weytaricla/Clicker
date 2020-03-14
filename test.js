function upgrade1() {   //улучшение 1

    if (money >= FirstCost) {
        money = money - FirstCost
        plus = plus + FirstValue
        Level_of_fist_upgrade++;
        FirstCost = count(FirstCost, Level_of_fist_upgrade)
        document.getElementById('firstup').value = FirstCost + "$";
        update(1);
    } else {
        error()
    }



}function upgrade1() {   //улучшение 1

    if (money >= FirstCost) {
        update(FirstCost, FirstValue, Level_of_fist_upgrade, 1);
        document.getElementById('firstup').value = FirstCost + "$";
    } else {
        error()
    }

}


function update(Cost, Value, Level, PerSecondValue) {

    money = money - Cost
    plus = plus + Value
    Level ++
    Cost = count(Cost, Level)
    document.getElementById('money').value = money + "$";
    document.getElementById('value').value = "+" + plus + "$";
    MoneyPerSecond = MoneyPerSecond + PerSecondValue
    document.getElementById('persecond').value = "+" + MoneyPerSecond + "$";

}
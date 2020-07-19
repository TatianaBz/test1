var money= parseInt (prompt("Ваш бюджет за месяц",""));
var times=prompt("Введите дату в формате YYYY-MM-DD","");
var appData={budget:money,
             date:times,
             expenses: {}, 
             optionalExpenses: {},
             income: [],
             savings:false};
 /*            
        for (var i=1; i<=2; i++){
            var a = prompt("Введите обязательную статью расходов в этом месяце","");
            var b = prompt("Во сколько обойдется?","");
            if(typeof(a)==='string' && a != null &&
            typeof(b)==='string' && b != null &&
            a!='' && b !='' ){
                console.log("done");
                appData.expenses[a] = b; 
            }
            else{
                        console.log("вы ввели неверные значения"); i--;
                }
        }
 */

/* var i=1;
while (i<=2) {
    var a = prompt("Введите обязательную статью расходов в этом месяце","");
    var b = prompt("Во сколько обойдется?","");
    if(typeof(a)==='string' && a != null &&
    typeof(b)==='string' && b != null &&
    a!='' && b !='' ){
        console.log("done");
        appData.expenses[a] = b; 
    }
    else{
                alert("вы ввели неверные значения"); i--;
        }
    i++;    
}  
*/
var i=1;
do {var a = prompt("Введите обязательную статью расходов в этом месяце","");
var b = prompt("Во сколько обойдется?","");
if(typeof(a)==='string' && a != null &&
typeof(b)==='string' && b != null &&
a!='' && b !='' ){
    console.log("done");
    appData.expenses[a] = b; 
}
else{
            alert("вы ввели неверные значения"); i--;
    }
    i++;
}  
    while   (i<=2);
appData.moneyPerDay=appData.budget/30;
alert("Бюджет пользователя на 1 день состывляет "  + appData.moneyPerDay +" руб.");     

if (appData.budget<=100){
    console.log("Низкий доход");
}
else if (appData.budget > 100 && appData.budget < 200){
    console.log("Средний уровень дохода");
}
else if(appData.budget >= 200){
    console.log("Высокий уровень дохода");
}
else{
    console.log("Что-то пошло не так");
}


       
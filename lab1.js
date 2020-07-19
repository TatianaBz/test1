var money=prompt("Ваш бюджет за месяц","");
var times=prompt("Введите дату в формате YYYY-MM-DD","");
var appData={budget:money,
             date:times,
             expenses: {}, 
             optionalExpenses: {},
             income: [],
             savings:false};
var proRash1 = prompt("Введите обязательную статью расходов в этом месяце","");
var summ1 = prompt("Во сколько обойдется?","");
var proRash1 = prompt("Введите обязательную статью расходов в этом месяце","");
var summ1 = prompt("Во сколько обойдется?","");

appData.expenses.proRash1="summ1";
appData.expenses.proRash2="summ2";
alert("Бюджет  пользователя на 1 день"  + appData.budget/30);            
// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.
let sume = prompt("Enter purchase amount");
if(+sume){
   if(sume > 0 && sume < 200)alert(`Sume : ${sume}, Discount = 0%, TO PAY : ${sume}`);
   else if(sume >= 200 && sume < 300)alert(`Sume : ${sume}, Discount = 3%, TO PAY : ${sume-(sume*3/100)}`);
   else if(sume >= 300 && sume < 500)alert(`Sume : ${sume}, Discount = 5%, TO PAY : ${sume-(sume*5/100)}`);
   else if(sume >= 500)alert(`Sume : ${sume}, Discount = 7%, TO PAY : ${sume-(sume*7/100)}`);
   else alert("Incorrect data");
}
else alert("Incorrect data");
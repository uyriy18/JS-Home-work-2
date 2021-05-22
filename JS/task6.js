// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.
let currencyNumber = prompt("Enter number of dollars to exchge");
if(+currencyNumber){
   let currency = prompt("If you want to exchange on AZN- enter \"1\"\nIf you want to exchange on UAH- enter \"2\"");
   switch(currency){
   	case"1":
   	alert(`${currencyNumber} US = ${+currencyNumber*1.7} AZN`)
   	break;
   	case"2":
   	alert(`${currencyNumber} US = ${+currencyNumber*27.43} UAH`)
   	break;
   	default:
   	alert("incorrect data!")
   	break;
   }
}
else alert("Incorrect data!")
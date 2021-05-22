// Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.
let number = prompt("Enter five-number digit");
if(!+number || number.length != 5)alert("incorrect data!")
else{
	if(number[0] == number[4] && number[1] == number[3]){
		alert("This is polydrom")	
	}
	else alert("This is not polydrom")	
}
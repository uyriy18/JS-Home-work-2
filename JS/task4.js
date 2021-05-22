// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.
let year = prompt("Enter yhe year");
if(!+year)alert("incorrect data!");
else{
	if((year%400 == 0) || (year%4 == 0) && (year%100 != 0))alert("Leap year!");
	else alert("Normal year");
}
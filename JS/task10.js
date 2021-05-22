// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.
let year = parseInt(prompt("Enter the year"));
let mounth = parseInt(prompt("Enter the mounth")) - 1;
let day = parseInt(prompt("Enter the day"));
if((day > 0 && day < 32) && (mounth > 0 && mounth < 12)){
	let date = new Date(year, mounth, day+1);
   alert(date);
}
else alert("Incorrect date");

/*Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры.*/
let number = prompt("Enter three-digit number");
if(!+number || number.length != 3)alert("Incorrect data!");
else{
	let count = 0;
	for(let i = 0; i < number.length; i++){
		for(let j = 0; j < number.length; j++){
			if(number[i] == number[j]){
				count++;
			}			
		}
		if(count>1){
				break;
			}
	   else count = 0;
	}
	if(count > 1)alert("There are simular numbers in digit");
	else alert("There are not simular numbers in digit");
}
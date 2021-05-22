// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.
let count = 0;
let first = prompt(`\"2+2\"\nenter the number of the correct answer\n1) 4\n2) 2\n3) 8`);
if(!+first)
{
	alert("incorrect data");
}
else{
	switch(first){
	case '1':
	alert("Correct!\n+2 score! ");
	count += 2;
	break;
	case '2':
	alert("Incorrect!");
	break;
   case '3':
	alert("Incorrect!");
	break;
	default:
	alert("incorrect data!");
   break;
   }
}
let second = prompt(`\"Capital of Ukraine\"\nenter the number of the correct answer\n1) Chernigov\n2) Kyiv\n3) Priluki`);
if(!+second)
{
	alert("incorrect data");
}
else{
	switch(second){
	case '1':
	alert("Incorrect!");
	break;
	break;
	case '2':
	alert("Correct!\n+2 score! ");
	count += 2;
	break;
   case '3':
	alert("Incorrect!");
	break;
	default:
	alert("incorrect data!");
   break;
   }
}
let third = prompt(`\"Who the best student?\"\nenter the number of the correct answer\n1) Vasya\n2) Nikodim\n3) Yriy`);
if(!+third)
{
	alert("incorrect data");
}
else{
	switch(third){
	case '1':
	alert("Incorrect!");
	break;
	break;
	case '2':
	alert("Incorrect!");
	break;
   case '3':
	alert("Correct!\n+2 score! ");
	count += 2;
	break;
	default:
	alert("incorrect data!");
   break;
   }
}
alert(`Congratulations you have earned ${count} score!`);


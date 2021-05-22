// Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.
let circumference = prompt("Enter the circumference");
let perimetr = prompt("Enter the perimtr");
if(+circumference && +perimetr){
   if((circumference/3.14) < (perimetr/4))alert("the circle fits into the specified square");
   else alert("the circle doesn't fit into the specified square")
}
else alert("incorrect data");
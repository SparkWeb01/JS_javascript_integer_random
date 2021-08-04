let a = Math.round(prompt(`    (!!!только целые числа!!!)
Введите нижний предел рандомного числа `))
let b = Math.round(prompt("Введите нижний предел рандомного числа"))
let count = Math.round(prompt("Введите количество рандомных чисел "))

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}

for (var i = 0; i < count; i++) {
	alert(randomInteger(a, b))
}
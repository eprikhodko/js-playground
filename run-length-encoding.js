/*
В задаче необходимо преобразовать некую строку, чтобы на входе из строки "hello world!"
получился массив с массивами вот такого вида: 
[[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
*/
function runLengthEncoding(str) {
  // создадим основной массив, который будет хранить вложенные массивы из пар значений
  const mainArray = [];
  // создадим счетчик, который будет определять, сколько раз в строке повторяется одинаковая пара символов
  let count = 1;

  // в цикле пройдем по каждому элементу исходной строки
  for (let i = 0; i < str.length; i += 1) {
    // создадим пустой массив для пары значений
    const pairArray = [];
    // если текущий символ в строке такой же как и следующий символ, увеличим счетчик на единицу
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      // если текущий символ не такой же как следующий символ, запушим текущее значение счетчика в массив и сбросим счетчик
      pairArray.push(count);
      count = 1;
      // запушим в массив текущий символ строки
      pairArray.push(str[i]);
      // запушим в основной массив, который содержит массивы с парами значений, наш новый массив из пары значений
      mainArray.push(pairArray);
    }
  }
  return mainArray;
}

runLengthEncoding('hello world!');
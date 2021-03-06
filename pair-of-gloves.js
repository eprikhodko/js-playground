/* 
Задача: у нас есть какой то массив из строк. Среди строк есть одинаковые значения. 
Нужно посчитать, сколько у нас есть пар одинаковых строк. Пример:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

// зададим исходный массив
const input = ['red', 'green', 'red', 'blue', 'blue', 'red', 'yellow'];

function countPairs(arr) {
  /* 
  Будем использовать Reduce для подсчета повторяющихся значений в массиве. 
  Как это все будет работать?

  Разберем, как работает и что делает метод массива reduce. 
  Reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
  В данной задаче использован такой синтаксис: reduce(callbackFn, initialValue)
  Reduce применяет функцию callback по очереди к каждому элементу массива слева направо, 
  сохраняя при этом промежуточный результат.

  Аргументы функции callback(previousValue, currentItem):
  - previousValue – последний результат вызова функции, он же «промежуточный результат».
  - currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.

  Кроме callback, методу reduce можно передать «начальное значение» – аргумент initialValue. 
  Если он есть, то на первом вызове значение previousValue будет равно initialValue.
  */

  /* 
  зададим начальное значение, которое передадим в метод reduce. Это будет пустой объект. 
  В этот объект будут накапливаться элементы массива, с которым будет работать reduce.
  */
  const initialValue = {};

  /* 
  Создадим функцию reducer, это будет колбэк, который мы будем передавать в метод reduce. 
  Что делает эта функция?
  Функция reducer принимает на вход два параметра, аккумулятор, в который она будет накапливать
  результаты вызова этой функции, и текущий элемент массива.
  Так как мы передаем в метод reduce, initialValue, то при первом вызове колбэка reducer, 
  значение аккумулятора acc будет равно initialValue, то есть пустому объекту.
  */

  /* 
  Мы передаем в колбэк reducer аккумулятор и текущий элемент массива. 
  При первом вызове reducer, значение аккумулятора будет равно initialValue, то есть пустому объекту. 
  */
  const reducer = function (acc, item) {
    // если в объекте acc нет ключа с таким же именем, что и текущее значение массива,
    // тогда создадим такой ключ и присвоим ему значение 1
    if (!acc[item]) {
      acc[item] = 1;
      // если в объекте acc есть ключ с таким же именем, что и текущее значение массива,
      // тогда увеличим значение этого ключа на единицу
    } else {
      acc[item] += 1;
    }
    return acc;
  };

  // вызываем метод reduce для массива arr, и передаем ему колбэк и начальное значение равное пустому объекту
  const result = arr.reduce(reducer, initialValue); // {red: 3, green: 1, blue: 2, yellow: 1}

  // найдем количество пар. Сначала зададим начальное количество пар в 0
  let pairsCount = 0;
  // пройдем по значениям объекта result, и для каждого значения выполним деление на 2,
  // с округлением вниз до ближайшего целого числа. Так мы найдем количество пар. Прибавим количество пар в счетчик.
  Object.values(result).forEach((val) => {
    pairsCount += Math.floor(val / 2);
  });

  return pairsCount;
}

countPairs(input);

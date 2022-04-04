const string = 'recede';

function duplicateEncode(str) {
  const lowerCasedStr = str.toLowerCase();
  const strArray = lowerCasedStr.split('');
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
  const result = strArray.reduce(reducer, initialValue); // {r: 1, e: 3, c: 1, d: 1}
  console.log(strArray);
  console.log(result);

  const newArr = [];
  for (let i = 0; i < strArray.length; i += 1) {
    // для каждого элемента массива, мы проверям, какое значение у этого элемента в объекте result.
    // если у ключа в объекте result значение больше 1, тогда пушим в новый массив ), иначе (
    if (result[strArray[i]] > 1) {
      newArr.push(')');
      console.log('this symbol appears in array more than once:', strArray[i]);
    } else {
      newArr.push('(');
      console.log('this symbol appears in array only once:', strArray[i]);
    }
  }

  console.log(newArr.join(''));

  return newArr.join('');
}

duplicateEncode(string);

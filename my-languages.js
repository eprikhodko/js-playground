/* 
Получаем на вход объект, нужно преобразовать его в массив.
можно взять значения свойств объекта, поместить их массив, отсортировать этот массив,
потом взять отсортированый массив, и для каждого элемента массива искать в исходном объекте 
такое же значение свойства и возвращать его ключ в новый массив. Так как массив будет отсортирован, 
то и свойства мы вернем в нужном нам порядке.
*/

const res = { Hindi: 60, Dutch: 93, Greek: 71 };

function myLanguages(results) {
  // получим массив из значений свойств исходного объекта
  const resultsValues = Object.values(results);
  // отфильтруем значения которые больше или равны 60
  const filteredValues = resultsValues.filter((item) => item >= 60);
  // отсортируем массив в порядке убывания
  const sortedValues = filteredValues.sort((a, b) => b - a);
  // пройдем по массиву значений, и вернем новый массив. Для каждого текущего элемента массива,
  // будем возвращать такой же ключ из исходного объекта
  const result = sortedValues.map((item) =>
    Object.keys(results).find((key) => results[key] === item)
  );
  return result;
}

myLanguages(res);

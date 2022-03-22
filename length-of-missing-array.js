let arr = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
arr = [[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
arr = [
  ['a', 'a', 'a'],
  ['a', 'a'],
  ['a', 'a', 'a', 'a'],
  ['a'],
  ['a', 'a', 'a', 'a', 'a', 'a'],
];
arr = [];

function getLengthOfMissingArray(array) {
  // если в функцию передали null вместо массива, или пустой массив, вернем 0
  if (array === null || array.length === 0) {
    return 0;
  }

  // если какой то из элементов исходного массива имеет значение null, вернем 0
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === null) {
      return 0;
    }
  }

  // сделаем глубокую копию исходного массива
  const arrayDeepCopy = JSON.parse(JSON.stringify(array));

  /* 
  Отсортируем массив по длине элементов в порядке возрастания.
  Это нужно для того, чтобы мы смогли заметить разницу между длинами массива. 
  Например, мы передали массив [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
  Если отсортировать этот массив по длинам его элементов, мы получим такой массив:
  0: [1]
  1: (2) [1, 2]
  2: (4) [4, 5, 1, 1]
  3: (5) [5, 6, 7, 8, 9]
  Здесь видно, что у первого элемента длина равняется 1, у второго 2, у третьего 4.
  Становится понятно, что у нас есть разница, скачок между 2 и 4 элементом массива. 
  Это и есть наш пропущенный элемент. В задаче нам нужно вернуть его длину.
  */
  const sortedArray = arrayDeepCopy.sort((a, b) => a.length - b.length);
  let missingArrayLength = 0;

  for (let i = 0; i < sortedArray.length - 1; i += 1) {
    if (sortedArray[i] === null || sortedArray[i].length === 0) {
      return 0;
    }
    /* 
    Чтобы найти длину пропущенного массива, возьмем пару соседних значений в отсортированном массиве, 
    и вычтем из длины второго значения длину первого. Если значения идут по порядку, тогда результат их вычитания 
    будет равен 1. Значит все окей. Если значения идут не по порядку, значит результат вычитания будет отличаться
    от 1. То есть, если значение длины первого значения будет равен 2, а второго 4, и мы вычтем из второго первое,
    тогда получим 2. Значит эти значения идут не по порядку, то есть между ними должен быть пропущенный массив.
    Чтобы найти длину недостающего элемента, прибавим единицу к текущему элементу на котором мы сейчас остановились в цикле.
    */
    if (sortedArray[i + 1].length - sortedArray[i].length !== 1) {
      missingArrayLength = sortedArray[i].length + 1;
    }
  }

  return missingArrayLength;
}

getLengthOfMissingArray(arr);
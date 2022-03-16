// TODO: implement the four functions specified.
// head(arr) принимает на вход массив чисел, и возвращает первый элемент этого массива
function head(arr) {
  return arr[0];
}

/* 
  tail возвращает новый массив, который содержит все элементы исходного массива, кроме первого элемента
  
  Для этого используем метод slice. Первым параметром slice принимает индекс, 
  начиная с которого нам нужно вернуть элементы массива. Если мы передадим в slice единицу, 
  это будет значить, что нам нужно вернуть все элементы массива начиная с 1 индекса. 
  Элемент с нулевым индексом будет проигнорирован.
  */
function tail(arr) {
  return arr.slice(1);
}
/* 
  init возвращает новый массив, который содержит все элементы исходного массива, кроме последнего элемента
  
  для этого снова используем метод slice. Первым параметром slice принимает индекс, 
  начиная с которого нужно вернуть элементы массива, 
  вторым параметром slice принимает до какого индекса нам нужно вернуть элементы массива. 
  Если мы передадим в slice 0, и arr.length - 1 , это будет значить, что нам нужно вернуть
  все элементы массива начиная с 0 индекса и до предпоследнего индекса. 
  */

function init(arr) {
  return arr.slice(0, arr.length - 1);
}

function last(arr) {
  return arr[arr.length - 1];
}

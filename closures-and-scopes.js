/* 
что нужно здесь сделать?

В этом коде мы создаем массив из функций, и каждая функция должна возвращать свой индекс в этом массиве.
Сейчас если мы вызовем функцию из массива callbacks, вот так: callbacks[0](), нам вернется 5.
Нужно сделать чтобы возвращался правильный индекс. То есть, если мы вызываем функцию из массива callbacks, вот так:

callbacks[0]()

в ответ мы должны получить 0, а не 5.

Почему нам сейчас возвращается 5 при вызове callbacks[0]()?
Непонятно. Но проблему снова решает IIFE, или использование let вместо var в условии цикла.

This was not my solution, but my guess is that the "let" variable (ES6) constricts i to its local scope (the for-loop), so each function pushed to the array returns the local "i" (the index value when that function was pusehd).

*/

function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    (function (copyOfI) {
      callbacks.push(function () {
        return copyOfI;
      });
    })(i);
  }

  return callbacks;
}

var callbacks = createFunctions(5);

callbacks[0]();

/*
взять год
сгенерировать из года 12 объектов Date, подставляя туда год, месяц и число
проверить, если это пятница, добавить к счетчику единицу
так пройти по всем 12 месяцам.
*/

const number = 2015;

function unluckyDays(year) {
  // установим счетчик для черных пятниц в 0
  let blackFridayCount = 0;
  // этот предикат проверяет, является ли переданный ему день пятницей
  const isBlackFriday = (day) =>
    day.toLocaleDateString('en-EN', { weekday: 'long' }) === 'Friday';

  for (let i = 0; i < 12; i += 1) {
    // сгенерируем объект даты, передадим конструктору год, номер месяца, и число
    const date = new Date(year, i, 13);
    // если 13 число какого то месяца будет пятницей, добавим в счетчик 1
    if (isBlackFriday(date)) {
      blackFridayCount += 1;
    }
  }
  return blackFridayCount;
}

unluckyDays(number);

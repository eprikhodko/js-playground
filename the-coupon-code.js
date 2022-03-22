const enteredCoup = '123';
const correctCoup = '123';
const currDate = 'July 9, 2015';
const expDate = 'July 2, 2015';

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  // создадим объекты даты при помощи конструктора new Date(datestring)
  const currDate = new Date(currentDate);
  const expDate = new Date(expirationDate);

  if (enteredCode === correctCode && currDate <= expDate) {
    return true;
  }

  return false;
}

checkCoupon(enteredCoup, correctCoup, currDate, expDate);

'use strict';

//возвращает значение
// Условие ? выражение 1 : выражение 2

const value = 11;
value
    ? console.log('Условие истино')
    : console.log('Условие ложно');
    
const value1 = 11,
      value2 = 25;
 
value1 && value2
    ? myFunction1(value1, value2)
    : myFunction();

let value3 = 11;
console.log(value3 >= 0 ? value3: -value3);

value3 = -5;
const res = value3 >= 0 ? value3 : - value3;
console.log(res);


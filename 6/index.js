function isLeapYear(year){
  let isLeap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  return isLeap ? 'leap' : 'no leap';
}

console.log(isLeapYear(2019));
console.log(isLeapYear(2220));
console.log(isLeapYear(2224));
console.log(isLeapYear(2000));







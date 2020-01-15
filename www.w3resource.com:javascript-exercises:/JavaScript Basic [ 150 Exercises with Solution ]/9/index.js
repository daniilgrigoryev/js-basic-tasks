let date = new Date();
let novyGodDate = new Date(date.getFullYear(), 12);
let secInDay = 1000 * 60 * 60 * 24;
console.log(Math.ceil((novyGodDate.getTime() - date.getTime()) / secInDay) + ' days left Novy God');
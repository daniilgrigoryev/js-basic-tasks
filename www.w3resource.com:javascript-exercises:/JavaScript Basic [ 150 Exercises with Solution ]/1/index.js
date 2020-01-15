let getCurrentDay = new Date();

let getIndexWeek = getCurrentDay.getDay();
let getCurrentHours = getCurrentDay.getHours();
let getCurrentMinutes = getCurrentDay.getMinutes();
let getCurrentSeconds = getCurrentDay.getSeconds();

let daysWeekList = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

let meridiem = function(dayHours){
	return dayHours < 12 ? 'am' : 'pm';
};

console.log(`Today is : ${daysWeekList[getIndexWeek]}`);
console.log(`Current time is : ${getCurrentHours} ${meridiem(getCurrentHours).toUpperCase()} : ${getCurrentMinutes} : ${getCurrentSeconds}`)
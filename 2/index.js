let getCurrentDay = new Date();

let getIndexWeek = getCurrentDay.getDay();
let getCurrentHours = getCurrentDay.getHours();
let getCurrentMinutes = getCurrentDay.getMinutes();
let getCurrentMonth = getCurrentDay.getMonth();
let getFullYear = getCurrentDay.getFullYear();

// console.log(`${getCurrentMonth}-${getIndexWeek}-${getFullYear}`); // mm-dd-yyyy
// console.log(); // mm/dd/yyyy
// console.log(); // dd-mm-yyyy
// console.log(); // dd/mm/yyyy

let formatDate = function(params, mask){
	// params.month
	// params.day
	// params.year
	// params.mask
	let reg = /\s*-\s*/;

	let month = params.month < 10 ? `0${params.month}`: params.month;
	let day = params.day < 10 ? `0${params.day}`: params.day;

	mask.split(reg);


	console.log(day, month, params.year, mask);

};


formatDate({
	month: getCurrentMonth,
	day: getIndexWeek,
	year: getFullYear
}, 'mm-dd-yyyy');

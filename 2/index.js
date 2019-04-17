let getCurrentDate = new Date();

let getCurrentDay = getCurrentDate.getDate();
let getCurrentMonth = getCurrentDate.getMonth();
let getFullYear = getCurrentDate.getFullYear();

let formatDate = function(params, mask){

	let month = params.month < 10 ? `0${params.month}`: params.month;
	let day = params.day < 10 ? `0${params.day}`: params.day;
	let year = params.year;

	// let chipsMask = mask.split(/\.|\-|\//);
	// let matchDevideres = mask.match(/\.|\-|\//ig);

	// let dateFormated; 

	mask = mask.replace(/yyyy/, year).replace(/dd/, day).replace(/mm/, month);

	return mask;
};


var mask_1 =  formatDate({
	month: getCurrentMonth,
	day: getCurrentDay,
	year: getFullYear
}, 'dd-mm-yyyy');

var mask_2 =  formatDate({
	month: getCurrentMonth,
	day: getCurrentDay,
	year: getFullYear
}, 'dd/mm/yyyy');

var mask_3 =  formatDate({
	month: getCurrentMonth,
	day: getCurrentDay,
	year: getFullYear
}, 'mm-dd-yyy');

var mask_4 =  formatDate({
	month: getCurrentMonth,
	day: getCurrentDay,
	year: getFullYear
}, 'mm/dd/yyy');


console.log(mask_1);
console.log(mask_2);
console.log(mask_3);
console.log(mask_4);

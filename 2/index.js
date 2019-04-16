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
	// let reg = /\s*-\s*/;

	let month = params.month < 10 ? `0${params.month}`: params.month;
	let day = params.day < 10 ? `0${params.day}`: params.day;
	let year = params.year;
	let hui = mask.split('-');

	var pushPush = [];

	for(let i = 0; i < hui.length; i++){
		switch(hui[i]){
			case 'dd':
				pushPush.push(day);
			break;
			case 'mm':
				pushPush.push(month);
			break;
			case 'yyyy':
				pushPush.push(year);
			break;
			default:
				console.log('ты лох');
		}
	}

	console.log(pushPush);

};


formatDate({
	month: getCurrentMonth,
	day: getIndexWeek,
	year: getFullYear
}, 'yyyy-mm-dd');

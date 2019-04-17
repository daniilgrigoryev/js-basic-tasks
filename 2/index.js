let getCurrentDate = new Date();

let getCurrentDay = getCurrentDate.getDate();
let getCurrentMonth = getCurrentDate.getMonth();
let getFullYear = getCurrentDate.getFullYear();

let formatDate = function(params, mask){

	let month = params.month < 10 ?  parseInt(`0${params.month}`): params.month;
	let day = params.day < 10 ? parseInt(`0${params.day}`): params.day;
	let year = params.year;


	let chipsMask = mask.split(/\.|\-|\//);
	let matchDevideres = mask.match(/\.|\-|\//ig);


	let dataFormatted = [];

	for(let i = 0; i < chipsMask.length; i++){
		switch(chipsMask[i]){
			case 'dd':
				dataFormatted.push(day);
			break;
			case 'mm':
				dataFormatted.push(month);
			break;
			case 'yyyy':
				dataFormatted.push(year);
			break;
			default:
				console.log('nothing');
		}
	}

	dataFormatted.splice(1, 0, matchDevideres[0]);
	dataFormatted.splice(3, 0, matchDevideres[1]);

	console.log(dataFormatted);
	// console.log(pushPush);

};


formatDate({
	month: getCurrentMonth,
	day: getCurrentDay,
	year: getFullYear
}, 'yyyy.mm/dd');

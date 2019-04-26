// function P(sides){
// 	const perimeter = sides.reduce((sum, a) => sum + a) / 2; 	

// 	let aa = sides.reduce(function(sum, current, index) {
// 		return function area(){
// 			// Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// 			arr
// 			perimeter - current
// 		}
// 	}, 0);


// 	return aa;
// }


// function P(sides){
// 	const perimeter = sides.reduce((sum, a) => sum + a) / 2; 	

// 	return gos;
// }


// Math.sqrt(
// 	perimeter*(
// 	(perimeter-side1)*
// 	(perimeter-side2)*
// 	(perimeter-side3)
// 	)
// );


// 6
const perimeter = [5, 6, 7].reduce((sum, a) => sum + a) / 2;
// 9

// sum = 
// 6 - 5 = 1
// 6 - 4 = 2
// 6 - 3 = 3

// 9 - 5 = 4
// 9 - 6 = 3
// 9 - 7 = 2
// = * 24


// 6 * 1 
// 6 * 2
// 6 * 3

// let eshe = [5, 6, 7].reduce(function(sum, current, index, arr) {
// 	return sum = perimeter * (perimeter - current);
// }, 0);

// console.log(Math.sqrt(eshe));


[5, 6, 7].reduce((sum, current, i, arr) => {
	// console.log(i, !Number.isNaN(perimeter - arr[i+1]) ? (perimeter - current) * (perimeter - arr[i+1]) : sum);

	console.log(i, current, (perimeter - current) * (perimeter - arr[i+1]))
}, 0);



// console.log(Math.sqrt(perimeter * digger));

// console.log(computeTrigonHalfP([5, 4, 3]))







// function findAreaTriangle(params){
// 	// console.log(params);
	
// }


// console.log(P([5, 4, 3]));
// findAreaTriangle([5, 4, 3]);
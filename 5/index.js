function animateString(str, time){
	let body = document.getElementsByTagName('body')[0];
	let element = document.createElement('p');
			element.innerHTML = str;

	body.appendChild(element);

	setInterval(() => {
		str = str[str.length - 1] + str.substring(0, str.length - 1);
	}, time);
}

animateString('▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ', 30);
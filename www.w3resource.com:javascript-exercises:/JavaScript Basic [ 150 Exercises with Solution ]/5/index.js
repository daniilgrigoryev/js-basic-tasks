function animateString(str, time){
	let body = document.getElementsByTagName('body')[0];
	let element = document.createElement('p');
			element.innerHTML = str;

	body.appendChild(element);

	setInterval(() => {
		str = str[str.length - 1] + str.slice(0, str.length - 1);
		element.innerHTML = str.split('').reverse().join("");
	}, time);
}

animateString('✺▬▬▬▬', 100);
'use strict';

let button = document.querySelector('button');
let input = document.querySelector('input');
let div = document.querySelector('div');

button.addEventListener('click', function() {
	if (!/\d/.test(input.value)) {
		div.style.display = 'block';
	} else {
		div.style.display = 'none';
	}
});
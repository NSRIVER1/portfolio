
window.addEventListener('scroll', function(){

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let btn_index = document.getElementById('btn_index');
let text = document.getElementById('text');

var header = document.querySelector('header');
header.classList.toggle('abajo',window.scrollY>0);
	
let value = window.scrollY;

	stars.style.left = value * 0.25 + 'px';
	moon.style.top = value * 0.25 + 'px';
	mountains_behind.style.top = value * 0.5 + 'px';
	mountains_front.style.top = value * 0 + 'px';
	text.style.marginRight = value * 4 + 'px';
	text.style.marginTop = value * 1.5 + 'px';
	btn_index.style.marginTop = value * 1.5 + 'px';

});

// function menuToggle (){
// 	const toggleMenu = document.querySelector('.toggle');
// 	toggleMenu.classList.toggle('active')
// }
var burger = document.querySelector('.burger-menu');

document.querySelector('.burgerBtn').addEventListener('click', () => {
	burger.classList.add('burger-active');
})

document.querySelector('.close').addEventListener('click', () => {
	burger.classList.remove('burger-active');
})
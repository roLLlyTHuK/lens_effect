document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) { var beta = event.beta; // угол наклона вперед-назад var gamma = event.gamma; // угол наклона влево-вправо

// Преобразование углов наклона в значения для перемещения var moveX = gamma / 45; // Нормализуем значение в диапазоне [-1, 1] var moveY = beta / 45; // Нормализуем значение в диапазоне [-1, 1]

// Обновление значений переменных CSS document.documentElement.style.setProperty('--move-x', moveX); document.documentElement.style.setProperty('--move-y', moveY); }
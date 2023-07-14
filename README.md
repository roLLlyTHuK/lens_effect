# lens_effect
Learn from webdesign master https://webdesign-master.ru/blog/html-css/parallax-3d-lens-effect-website.html

Чтобы привязать отслеживание наклона мобильного устройства к переменным `--move-x` и `--move-y`, нужно внести соответствующие изменения в код. 
window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  var beta = event.beta; // угол наклона вперед-назад
  var gamma = event.gamma; // угол наклона влево-вправо

  // Преобразование углов наклона в значения для перемещения
  var moveX = gamma / 45; // Нормализуем значение в диапазоне [-1, 1]
  var moveY = beta / 45; // Нормализуем значение в диапазоне [-1, 1]

  // Обновление значений переменных CSS
  document.documentElement.style.setProperty('--move-x', moveX);
  document.documentElement.style.setProperty('--move-y', moveY);
}
```

Используем значения `beta` и `gamma` из события `deviceorientation` для вычисления значений `moveX` и `moveY`. Затем обновляем значения переменных CSS `--move-x` и `--move-y`, чтобы отразить наклон мобильного устройства.

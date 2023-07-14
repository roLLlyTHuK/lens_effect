document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.addEventListener('deviceorientation', e => {
  const tiltX = e.beta; // Tilt around x-axis (forward/backward tilt)
  const tiltY = e.gamma; // Tilt around y-axis (left/right tilt)

  Object.assign(document.documentElement, {
    style: `
      --move-x: ${tiltX * -0.005}deg;
      --move-y: ${tiltY * 0.01}deg;
    `
  });
});
// document.addEventListener('mousemove', e => {
// 	Object.assign(document.documentElement, {
// 		style: `
// 		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
// 		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
// 		`
// 	})
// })

// document.addEventListener('deviceorientation', e => {
//   const tiltX = e.beta; // Tilt around x-axis (forward/backward tilt)
// 	const tiltY = e.gamma; // Tilt around y-axis (left/right tilt)
// 	const tiltZ = e.alpha; // Tilt around z-axis

//   Object.assign(document.documentElement, {
//     style: `
//       --move-x: ${tiltX * -0.005}deg;
//       --move-y: ${tiltY * 0.01}deg;
//     `
//   });
// });
function handleMove(e) {
  let moveX, moveY;

  if (e.type === 'mousemove') {
    // Mouse movement
    moveX = (e.clientX - window.innerWidth / 2) * -0.005;
    moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  } else if (e.type === 'deviceorientation') {
    // Device tilt
    moveY = e.beta-90;
    moveX = e.gamma;
  }

  Object.assign(document.documentElement, {
    style: `
      --move-x: ${moveX}deg;
      --move-y: ${moveY}deg;
    `
  });
}

document.addEventListener('mousemove', handleMove);
window.addEventListener('deviceorientation', handleMove);
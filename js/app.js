// document.addEventListener('mousemove', e => {
// 	Object.assign(document.documentElement, {
// 		style: `
// 		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
// 		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
// 		`
// 	})
// })


function handleMove(e) {
  let moveX, moveY;

  if (e.type === 'mousemove') {
    // Mouse movement
    moveX = (e.clientX - window.innerWidth / 2) * -0.005;
    moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  } else if (e.type === 'deviceorientation') {
    // Device tilt
    moveY = (e.beta-window.innerWidth-90)*.01;
    moveX = (e.gamma-window.innerHeight)*-.001;
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
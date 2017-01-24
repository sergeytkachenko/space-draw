var canvas = document.getElementById('app');
var space = canvas.getContext('2d');

addPlanet(75, 75, 60);
addPlanet(300, 75, 30);


function addPlanet(x, y, raduis) {
	space.fillStyle = "rgba(0, 200, 200, 0.5)";
	space.beginPath();
	space.arc(x, y, raduis, 0, Math.PI * 2, true); 
	space.closePath();
	space.fill();
}

function getDistance(x1, y1, x2, y2) {
	let x = x2 -x1;
	let y = y2 - y1;
	return Math.sqrt(x * x + y * y);
}

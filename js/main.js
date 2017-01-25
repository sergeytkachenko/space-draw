const canvas = document.getElementById('app');
const space = canvas.getContext('2d');

const scale = 100; // в 1px - 10 км

const planets = {
	items: [],

	g: 9.8,
	G: 6.67384 * Math.pow(10, -11),
	
	getByName: function(name) {
		return planets.items.find(planet => planet.name === name);
	},
	
	add: function(config) {
		planets.drawPlanet(config);
		planets.items.push(config);
	},

	drawPlanet: function(config) {
		space.fillStyle = "rgba(0, 200, 200, 0.5)";
		space.beginPath();
		space.arc(config.x, config.y, config.r, 0, Math.PI * 2, true); 
		space.closePath();
		space.fill();
	},

	drawPlanets: function() {
		space.clearRect(0, 0, canvas.width, canvas.height);
		planets.items.forEach(planet => planets.drawPlanet(planet));
	},
	
	getDistance: function (x1, y1, x2, y2) {
		let x = x2 - x1;
		let y = y2 - y1;
		return Math.sqrt(x * x + y * y);
	},

	getPlanetDistance: function(planetName1, planetName2) {
		let planet1 = planets.getByName(planetName1);
		let planet2 = planets.getByName(planetName2);
		return planets.getDistance(planet2.x, planet1.x, planet2.y, planet1.y);
	},

	getPLanetGravity: function(planetName1, planetName2) {
		let planet1 = planets.getByName(planetName1);
		let planet2 = planets.getByName(planetName2);
		let distance = planets.getDistance(planet2.x, planet1.x, planet2.y, planet1.y);
		let F = planets.G * planet1.w / Math.pow(distance * 1000 * scale, 2);
		return F * planets.g / 1000; 
	},

	minusX: function(planet) {
		planet.x -= planet.speed;
	}
};

planets.add({
	name: 'earth',
	x: 70,
	y: 90,
	r: 65, // км
	w: 5.97600 * Math.pow(10, 24), // кг
	speed: 0 // км/с
});

planets.add({
	name: 'moon',
	x: 300,
	y: 75,
	r: 10,
	w: 10, 
	speed: 0 // км/с
});

function update() {
	let earth = planets.getByName('earth');
	let moon = planets.getByName('moon');
	let earthGravity = planets.getPLanetGravity('earth', 'moon') / 100;
	moon.speed += earthGravity;

	planets.minusX(moon);

	planets.drawPlanets();
	console.log(moon.speed);
}

setInterval(update, 10);



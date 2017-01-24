var canvas = document.getElementById('app');
var space = canvas.getContext('2d');

let planets = {
	items: [],
	
	getByName: function(name) {
		return planets.items.find(planet => planet.name === name);
	},
	
	add: function(config) {
		space.fillStyle = "rgba(0, 200, 200, 0.5)";
		space.beginPath();
		space.arc(config.x, config.y, config.r, 0, Math.PI * 2, true); 
		space.closePath();
		space.fill();
	},
	
	getDistance: function (x1, y1, x2, y2) {
		let x = x2 - x1;
		let y = y2 - y1;
		return Math.sqrt(x * x + y * y);
	},

	getPlanetDistance: function(planetName1, planetName2) {
		let planet1 = planets.getByName(planet1);
		let planet2 = planets.getByName(planet2);
		return planets.getDistance(planet2.x, planet1.x, planet2.y, planet1.y);
	}
};

planets.add({
	name: 'earth',
	x: 70,
	y: 90,
	r: 65
}});

planets.add({
	name: 'moon',
	x: 300,
	y: 75,
	r: 30
}});



document.body.onload = drawEverything();

function drawEverything() {
	drawCrosses(4,5,-23.5);
	drawCrosses(4,5,-1);
	// drawCrosses(8,5,-1);
	// drawCrosses(8,5,-20);
}

function drawCrosses(x,y,z) {
	const insertPoint = document.querySelector('#deco');
	const spacing_x = 24;
	const spacing_y = 24;

	ret = [];
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			const element = document.createElement('div');
			element.className = 'deco-cross'
			element.style = 'top: '+(j*spacing_y)+'rem; left: ' + ((i - x/2 + 0.5) * spacing_x) + 'rem; transform: translate3D(-0.1rem, -0.1rem,'+z+'px);'
			console.log(element);
			insertPoint.appendChild(element);
			// ret.push(element);
		}		
	}

}
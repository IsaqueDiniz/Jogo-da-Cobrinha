const 
		canvas = document.getElementById('canvas'),
	    context =  canvas.getContext('2d');
let 
		snake = [],
		posX = 10,
		posY = 10,
		velX = 0,
		velY= 0,
		foodX = 15,
		foodY = 15,
		grid = 20,
		tam = 5;

	setInterval(main, 1000/10);

	document.addEventListener('keydown', function(e){

		console.log(e.keyCode);

		switch (e.keyCode) {

			case 37:
				velX = -1;
				velY = 0; 
				break;
		
			case 38:
				velX = 0;
				velY = -1; 
				break;
		
			case 39:
				velX = 1;
				velY = 0; 
				break;

			case 40:
				velX = 0;
				velY = +1; 
				break;

		}
	
	});



	function main() {

		posX += velX;
		posY += velY;

		if (posX < 0) {
			posX = grid;
		}

		if (posX > 20) {
			posX = 0;
		}

		if (posY < 0) {
			posY = grid;
		}

		if (posY > 20) {
			posY = 0;
		}

		context.fillStyle = '#B5F0FF';
		context.fillRect(0, 0, canvas.width, canvas.height);
		console.log('teste');


		// snake.push({x : posX, y : posY});

		context.fillStyle = 'black';
		for (let i = 0; i < snake.length; i++) {
				context.fillRect(snake[i].x * grid , snake[i].y * grid, grid - 1, grid - 1)
				if ( (snake[i].x === posX) && (snake[i].y === posY)) {
					tam = 5;
				};
		};

		snake.push({x : posX, y : posY});


		while (snake.length > tam) {
			snake.shift();
		}

		context.fillStyle = 'red';
		context.fillRect(foodX * grid, foodY * grid, grid -1 , grid -1 );

		if ( (posX === foodX) && (posY === foodY) ) {
			tam++;	
			foodX = Math.floor(Math.random() * grid)
			foodY = Math.floor(Math.random() * grid)
		}

	};
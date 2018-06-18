const 
		canvas = document.getElementById('canvas'),
	    context =  canvas.getContext('2d');
let 
		snake = [],
		posX = 10,
		posY = 10,
		grid = 20;


window.onload = function() {

	document.addEventListener('keyDown', function(e){
		console.log(e);
	});

	setInterval(main, 1000/10);
}

	function main() {

		context.fillStyle = '#B5F0FF'
		context.fillRect(0, 0, canvas.width, canvas.height)
		console.log('teste')


		snake.push({x : posX,y : posY});

		context.fillStyle = 'black';
		for (let i = 0; i < snake.length; i++) {
				context.fillRect(snake[i].x * grid, snake[i].y * grid, grid, grid)

		};

	};
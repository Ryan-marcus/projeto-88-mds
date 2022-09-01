
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');

//Defina as posições iniciais da bola e do buraco.
ballY=0;
ballX=0;
holeY=400
holeX=800
ballObj=""

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeObj = img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeObj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObj);
	});
	//newImage();// Escreva o código para enviar a imagem da bola ao canvas
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if( (ballX==holeX)&&(ballY==holeY)) {
		canvas.remove(ballObj);

		document.getElementById(hd3).inner-"voce atingiu o objetivo"
		document.getElementById("myCanvas").style.borderColor="red";

	}
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >=5) { ballX = ballY - blockImageHeight; 
			console.log("block image height = " + blockImageHeight);
			 console.log("When Up arrow key is pressed, X = " + ballX + " , Y = "+ballY);
			  canvas.remove(ballObj); 
			  new_image(); }
	}

	function down()
	{
		if(ballY >=450) {
			 ballX = ballY + blockImageHeight; 
			console.log("block image height = " + blockImageHeight);
			 console.log("When Up arrow key is pressed, X = " + ballX + " , Y = "+ballY);
			  canvas.remove(ballObj); 
			  new_image(); }
	}

	function left()
	{
		
		if(ballX >=5) {
			ballX = ballX - blockImageWidth; 
		   console.log("block image Width = " + blockImageWidth);
			console.log("When Up arrow key is pressed, X = " + ballX + " , Y = "+ballY);
			 canvas.remove(ballObj); 
			 new_image(); }	
		
	}

	function right()
	{
		
		if(ballX <=1050) {
			ballX = ballX + blockImageWidth; 
		   console.log("block image Width = " + blockImageWidth);
			console.log("When Up arrow key is pressed, X = " + ballX + " , Y = "+ballY);
			 canvas.remove(ballObj); 
			 new_image(); }	
		
	}
	
}


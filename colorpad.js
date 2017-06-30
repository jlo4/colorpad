function randomColor() {
	//pick a red from 0 - 255
	//rounds down, so multiply by 256
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);	
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

$(document).ready(function(){
	$('.this').mouseover(function(){
		$(this).css("background-color", randomColor());
	})
});
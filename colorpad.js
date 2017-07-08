var $grid = document.getElementById("grid");

// function createGrid() {
// 	for(var i = 0; i < $grid.value; i++){
// 		$(".container").append('<div class="this">' + "div" + '</div>');
// 	}
// }

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
	$("#newGrid").on("click", function(){
		$(".gridContainer").children().remove();
		for(var i = 0; i < $grid.value; i++){
			for(var j = 0; j < $grid.value; j++){
				$('<div class="this">' + '</div>').appendTo(".gridContainer");
				$('.gridContainer div:nth-child(' + ($grid.value * j) + ') + ').css("clear", "left");
			}
		}
	});
	$('.gridContainer').on("mouseover", "div", function(){
		$(this).css("background-color", randomColor());
	});

  // $("input").keydown(function () {
  //   // Save old value.
  //   $(this).data("size", $(this).val());
  // });
  // $("input").keyup(function () {
  //   // Check correct, else revert back to old value.
  //   if (parseInt($(this).val()) <= 30 && parseInt($(this).val()) >= 16)
  //     ;
  //   else
  //     $(this).val($(this).data("size"));
  // });

});

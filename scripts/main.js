var size = 16;

function drawGrid(size) {

	for(var i = 0; i < size; i++) {
		$('#grid').append("<tr id = r" + i + "></tr>");

		for(var j = 0; j < size; j++) {
			$('#r' + i).append("<td></td>");
		}
	}

};

function randColor() {

	var c1 = Math.ceil(Math.random() * 255);
	var c2 = Math.ceil(Math.random() * 255);
	var c3 = Math.ceil(Math.random() * 255);

	return "rgb(" + c1 + ", " + c2 + ", " + c3 + ")";

};

for (var i = 0; i < 10; i++) {
	console.log(randColor());
};

$(document).ready(

	function() {

		drawGrid(size);

		$('table').on("mouseenter", "td",

			function() {
				console.log("hello!");
				$(this).css("background-color", "black");
			}

		);


		$('button').click(

			function() {
				console.log("click");
				size = prompt("What size grid would you like?");
				$('#grid').empty();
				drawGrid(size);

			}

		);
	}

);

$(document).ready(function(){
	$('body').css({
		"margin": "0",
	});

	$('.panel-container').css({
		"margin": "10% auto",
		"width": "600px",
		"background-color": "rgb(235, 224, 224)"
	});

	var containerWidth = $('.panel-container').width();

	drawPanels(40, containerWidth);
});

function drawPanels(size, containerWidth) {
	console.log("hi");
	size = size || 40;
	var panelSideLength = containerWidth/size - 2;
	console.log(size);
	for(var i = 0; i < size; i++) {
		for(var j = 0; j < size; j++)
			$('.panel-container').append('<div class="panel"></div>');
	};

	$('.panel').css({
		"margin": "0",
		"width": panelSideLength,
		"height": panelSideLength,
		"border": "1px solid black",
		"float": "left"
	});
}
	
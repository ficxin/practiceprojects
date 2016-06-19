$(document).ready(function(){
	$('html').css({
		"height": "100%"
	});

	$('body').css({
		"display": "flex",
		"height": "100%"
	});

	$('.panel-wrapper').css({
		"background-color": "#B03A2E",
		"width": "600px",
		"height": "600px",
		"margin": "auto",
		"display": "flex",
		"border-radius": "16px"
	});

	$('.panel-container').css({
		"width": "500px",
		"margin": "auto",
		"padding": "4px",
		"border-radius": "4px",
		"background-color": "rgb(235, 224, 224)"
	});

	var containerWidth = $('.panel-container').width();

	drawPanels(containerWidth);
});


function drawPanels(containerWidth, size=28) {
	var panelSideLength = containerWidth/size - 2;
	for(var i = 0; i < size; i++) {
		for(var j = 0; j < size; j++)
			$('.panel-container').append('<div class="panel"></div>');
	};

	$('.panel').css({
		"margin": "0",
		"width": panelSideLength,
		"height": panelSideLength,
		"border": "1px solid rgb(235, 224, 224)",
		"float": "left",
		"background-color": "#17202A",
		"opacity": "0.1"
	})
		.mouseenter(function() {
			var $currentOpacity = $(this).css('opacity');
			if ($currentOpacity < 1) {
				var newOpacity = (Number($currentOpacity) + 0.1).toString();
				$(this).css('opacity', newOpacity);
			}
		});
}





	
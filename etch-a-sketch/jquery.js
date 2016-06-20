$(document).ready(function(){
	var htmlPanel = '<div class="panel-wrapper">' +
									'<section class="panel-container"></section>' +
									'</div>'

	var htmlButtons = '<div class="panel-settings">' +
									'<button class="gray"></button>' +
									'<button class="red"></button>' +
									'<button class="yellow"></button>' +
									'<button class="green"></button>' +
									'<button class="blue"></button>' +
									'</div>'
									
  $('body').append(htmlButtons);
								
	$('body').append(htmlPanel);

	$('html').css({
		"height": "100%"
	});

	$('body').css({
		"margin": "0",
		"display": "flex",
		"justify-content": "center",
		"align-items": "center",
		"height": "100%"
	});

	$('.panel-settings').css({
		"min-width": "60px",
		"height": "200px",
		"display": "flex",
		"flex-direction": "column",
		"justify-content": "space-between",
		"align-items": "flex-start"
	});
  
  $('button').css({
  	"height": "32px",
  	"width": "32px",
  	"border-radius": "50%"
  });

  $('.yellow').css('background-color', '#F7DC6F');
  $('.blue').css('background-color', '#3498DB');
  $('.green').css('background-color', '#7DCEA0');
  $('.red').css('background-color', '#E74C3C');

	$('.panel-wrapper').css({
		"background-color": "#B03A2E",
		"min-width": "600px",
		"height": "600px",
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

	$('.gray').on('click', function() {
		clearPanels();
		drawPanels(containerWidth);
	});

	$('.red').on('click', function() {
		clearPanels();
		drawPanels(containerWidth, "#E74C3C");
	});

	$('.yellow').on('click', function() {
		clearPanels();
		drawPanels(containerWidth, "#F4D03F");
	});

	$('.green').on('click', function() {
		clearPanels();
		drawPanels(containerWidth, "#229954");
	});

	$('.blue').on('click', function() {
		clearPanels();
		drawPanels(containerWidth, "#3498DB");
	});
});


function drawPanels(containerWidth, color="#17202A", size=28) {
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
			$(this).css('background-color', color);
			var $currentOpacity = $(this).css('opacity');
			if ($currentOpacity < 1) {
				var newOpacity = (Number($currentOpacity) + 0.1).toString();
				$(this).css('opacity', newOpacity);
			}
		});
}

function clearPanels() {
	$('.panel').remove();
};
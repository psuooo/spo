
$(document).ready(function() {
	$(document).click(function (event) {    		
    	$('.again-w').removeClass('unhide');
    	$('.again-l').removeClass('unhide');
	});
	if(isCanvasSupported())
    	cg.init()
    else
    	$(document.body).html("You browser does not support HTML5, which is required to run this game.")
})

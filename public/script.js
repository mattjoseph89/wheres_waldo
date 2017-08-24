window.addEventListener("load", function(){

// waldos coordinate box

	game_display.addEventListener("click",function(event){
		var x = event.layerX;
    	var y = event.layerY;

    	if (x >= 106 && x <= 119 && y>=578 && y<=609){
    		alert("Found that dick!")
    	}
    	else{
    		alert("Try again!")
    	}
    });	







});


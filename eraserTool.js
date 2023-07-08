function EraserTool() {
    // Set the name and icon
	this.icon = "assets/eraser.jpg";
	this.name = "Eraser";
    
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    
	this.draw = function () {
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                fill(255);
                stroke(255);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
    this.unselectTool = function(){
        //clear fill and stroke
        fill(colourP.selectedColour);
        stroke(colourP.selectedColour);
        strokeWeight(1)
    };
    
    this.populateOptions = function(){
        //set the fill and stroke
        fill(255);
        stroke(255);
        strokeWeight(30);
	};
}
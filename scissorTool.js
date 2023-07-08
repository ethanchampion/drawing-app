function ScissorTool(){
	this.icon = "assets/scissors.jpg";
	this.name = "Scissors";

	var previousMouseX = -1;
	var previousMouseY = -1;
    var drawing = false;
    
    var pointArray = [];

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                drawing = true;
			}
			
			else{
                //draw line from previous mouse position to current mouse position then add current mouse position to the position array
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                pointArray.push([mouseX, mouseY]);
			}
		}
        
		else{
            //reset tool once the mouse is let go
			previousMouseX = -1;
			previousMouseY = -1;
            if(drawing){
                //clears all pixels within the designated area
                beginShape();
                for(var i = 0; i < pointArray.length; i++){
                    vertex(pointArray[i][0], pointArray[i][1]);
                }
                endShape(CLOSE);
                pointArray = [];
                drawing = false;
            }
		}
	};
    
    this.unselectTool = function(){
        //clear fill and stroke
        fill(colourP.selectedColour);
        stroke(colourP.selectedColour);
    };
    
    this.populateOptions = function(){
        //set the fill and stroke to white
        fill(255);
        stroke(255);
	};
}



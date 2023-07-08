// Create the rectangle tool function
function RectangleTool(){
    // Set the name and icon
	this.icon = "assets/rectangleTool.jpg";
	this.name = "Rectangle";

	this.fill = false;

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	
	var self = this;
    
	//draws the rectangle to the screen 
	this.draw = function(){
        if(this.fill == true) {
				fill(colourP.selectedColour);
        }
        else {
				noFill();
        }

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new rectangle
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous rectangles
				updatePixels();
				//draw the rectangle
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent rectangle and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

	this.unselectTool = function(){
		//clear options
		$(".options").html("");
	};


	this.populateOptions = function(){
		$(".options").html("<button id='fillButton'>Fill</button>");
		//click handler
		$("#fillButton").on("click", function(){
			if (self.fill == false){ 
				self.fill = true;
				$(this).text('Outline');
			}
			else{ 
				self.fill = false;
				$(this).text('Fill');

			}
		});
	}

}
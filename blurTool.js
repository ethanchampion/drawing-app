function BlurTool(){
    // Set the name and icon
	this.icon = "assets/blurIcon.png";
	this.name = "Blur";
    
    var blurWidth = 20;
    
    this.blurPixel = function(xPos, yPos){
        //create an array of the colours of nearby pixels
        var pixelList = [get(xPos - (blurWidth / 2), yPos), get(xPos + (blurWidth / 2), yPos), get(xPos, yPos - (blurWidth / 2)), get(xPos, yPos + (blurWidth / 2))];
        var avgColour = [0, 0, 0];
        for (var i = 0; i < 4; i++){
            for(var j = 0; j < 3; j++){
                //find the totals for the red, green and blue values of each pixel
                avgColour[j] += pixelList[i][j];
            }
        }
        for(var i = 0; i < 3; i++){
            //divide each value by 4, hence finding the average colour of the pixels
            avgColour[i] = Math.floor(avgColour[i] / 4);
        }
        //draw a small ellipse in the average colour of the pixels
        fill(avgColour[0], avgColour[1], avgColour[2]);
        ellipse(xPos, yPos, blurWidth);
    };
    
	this.draw = function(){
		if (mouseIsPressed){
            for(var i = -5; i <= 5; i += 10){
                for(var j = -5; j <= 5; j += 10){
                    this.blurPixel(mouseX + i, mouseY + j);
                }
            }
		}
	};
    
    this.unselectTool = function(){
        //clear stroke and fill
        stroke(colourP.selectedColour);
        fill(colourP.selectedColour);
    };
    
    this.populateOptions = function(){
        //set stroke
        noStroke();
	};
}
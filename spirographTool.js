function SpirographTool(){
	//set an icon and a name for the object
	this.icon = "assets/spirograph.jpg";
	this.name = "spirograph";
    
    var rotationNum = 60;
    var drawing = false;
	var previousPositionArray = [];
    
    this.calcArray = function(xPos, yPos){
        //return an array containing the input co-ordinates and all it's translated copies
        var array = []
        for(var i = 0; i < rotationNum; i++){
            //rotate the mouse position about point (width/2, height/2) and add each rotation to the array
            array.push([(width / 2) + ((xPos - (width / 2)) * cos((i * PI) / (rotationNum / 2))) - ((yPos - (height / 2)) * sin((i * PI) / (rotationNum / 2))), (height / 2) + ((xPos - (width / 2)) * sin((i * PI) / (rotationNum / 2))) + ((yPos - (height / 2)) * cos((i * PI) / (rotationNum / 2)))]);
        }
        return array;
    };
    
    this.setPreviousArray = function(array){
        //returns a new array identical to the input array
        var previousArray = [];
        for(var i = 0; i < array.length; i++){
            previousArray.push(array[i].slice());
        }
        return previousArray;
    };

	this.draw = function(){
        //if the mouse is pressed
		if(mouseIsPressed){
            //set array of all points
            var positionArray = this.calcArray(mouseX, mouseY);
            //if previous position array is empty set it to the current position array
            if(drawing == false){
                //set the mouse position array as the previous mouse position array
                previousPositionArray = this.setPreviousArray(positionArray);
                drawing = true;
            }
            else {
                for(var i = 0; i < positionArray.length; i++){
                    //draw a line between the previous mouse position and current mouse position and draw every copy
                    line(previousPositionArray[i][0], previousPositionArray[i][1], positionArray[i][0], positionArray[i][1]);
                }
                //set the mouse position array as the previous mouse position array
                previousPositionArray = this.setPreviousArray(positionArray);
            }
        }
        
        else{
            //resets the tool after the mouse is let go
            previousPositionArray = [];
            drawing = false;
        }
    };
}
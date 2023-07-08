//a tool for drawing a tick or cross stamp to the screen.
function StampTool() {
	this.icon = "assets/stamp.jpg";
	this.name = "Stamp";

	this.type = "tick";
	
	var self = this;
    
    //draws the tick stamp variant
    this.drawTick = function(xPos, yPos) {
        line(xPos, yPos, xPos - 20, yPos - 15);
        line(xPos, yPos, xPos + 25, yPos - 30);
    };
    
    //draws the cross stamp variant
    this.drawCross = function(xPos, yPos) {
        line(xPos - 10, yPos - 10, xPos + 10, yPos + 10);
        line(xPos - 10, yPos + 10, xPos + 10, yPos - 10);
    };    
    
	//draws the stamp to the screen 
	this.draw = function(){
        if(mouseIsPressed) {
            if(this.type == "tick") {
                this.drawTick(mouseX, mouseY);
            }
            else if(this.type == "cross") {
                this.drawCross(mouseX, mouseY);
            }
        }
	};

	this.unselectTool = function(){
		//clear options
		$(".options").html("");
        this.type = "tick";
	};


    this.populateOptions = function(){
        $(".options").html("<button id='typeButton'>Cross</button>");
        //click handler
        $("#typeButton").on("click", function(){
            if (self.type == "tick"){ 
                self.type = "cross";
                $(this).text('Tick');
            }
            else{ 
                self.type = "tick";
                $(this).text('Cross');

            }
        });
    };
}


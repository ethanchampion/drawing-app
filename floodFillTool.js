function FloodFillTool(){
	this.icon = "assets/fill.png";
	this.name = "fill";
    
    var colour;
    var inProgress = false;
    
    this.fill = function(x, y){
        
        function checkPixel(x, y){
            if(x < 0 || x > width || y < 0 || y > height){
                return;
            }
            if(red(get(x, y)) == red(colour) && green(get(x, y)) == green(colour) && blue(get(x, y)) == blue(colour)){
                colourPixels(x, y);
            }
        }
        
        function colourPixels(x, y){
            if(x < 0 || x > width || y < 0 || y > height){
                return
            }
            point(x, y);
            for(var i = -1; i <= 1; i++){
                for(var j = -1; j <= 1; j++){
                    checkPixel(x + i, y + j);
                }
            }
        }
        colourPixels(x, y);
        inProgress = false;
    };
    
	this.draw = function(){
        
        if(!inProgress){
            if(mouseIsPressed){
                inProgress = true;
                colour = get(mouseX, mouseY);
                this.fill(mouseX, mouseY);
		  }
        }
	};
}
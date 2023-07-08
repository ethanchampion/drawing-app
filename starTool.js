function StarTool(){
	this.icon = "assets/star.png";
	this.name = "star";
    
    var interval = 0;
    
	this.draw = function(){
        //periodically draws a star to the current mouse position
		if(mouseIsPressed){
                if (interval === 0) {
                    var starSize = random(1,5)
                    //draw star
                    beginShape();
                    vertex(mouseX, mouseY - (5 * starSize));
                    vertex(mouseX + (1 * starSize), mouseY - (1 * starSize));
                    vertex(mouseX + (5 * starSize), mouseY - (1 * starSize));
                    vertex(mouseX + (3 * starSize), mouseY + (1 * starSize));
                    vertex(mouseX + (4 * starSize), mouseY + (5 * starSize));
                    vertex(mouseX, mouseY + (3 * starSize));
                    vertex(mouseX - (4 * starSize), mouseY + (5 * starSize));
                    vertex(mouseX - (3 * starSize), mouseY + (1 * starSize));
                    vertex(mouseX - (5 * starSize), mouseY - (1 * starSize));
                    vertex(mouseX - (1 * starSize), mouseY - (1 * starSize));
                    endShape(CLOSE);
                    //reset interval
                    interval = 5;
                } 
                else {
                    interval -= 1;
                }
		}
	};
}
function StarTool(){
	this.icon = "assets/star.png";
	this.name = "star";
    var interval = 0;
	this.draw = function(){
		if(mouseIsPressed){
                if (interval === 0) {
                    stroke(0);
                    fill(255, 255, 0);
                    beginShape();
                    vertex(mouseX, mouseY-5);
                    vertex(mouseX+1, mouseY-1);
                    vertex(mouseX+5, mouseY-1);
                    vertex(mouseX+3, mouseY+1);
                    vertex(mouseX+4, mouseY+5);
                    vertex(mouseX, mouseY+3);
                    vertex(mouseX-4, mouseY+5);
                    vertex(mouseX-3, mouseY+1);
                    vertex(mouseX-5, mouseY-1);
                    vertex(mouseX-1, mouseY-1);
                    vertex(mouseX, mouseY-5);
                    endShape();
                    interval = 5;
                } else {
                    interval -= 1;
                }
		}
	};
}
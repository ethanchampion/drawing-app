function ColourPickerTool(){
    // Set the name and icon
	this.icon = "assets/colourPicker.jpg";
	this.name = "ColourPicker";
    
	this.draw = function(){
		if (mouseIsPressed){
            this.colour = get(mouseX, mouseY);
            ColourPalette("rgb(" + this.colour[0] + ", " + this.colour[1] + ", " + this.colour[2] + ")");
		}
	};
}
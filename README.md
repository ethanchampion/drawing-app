# Drawing Application

## List of ideas currently implemented

- Rectangle / Ellipse Tool
  - Draws a rectangle or ellipse from the position where the mouse is clicked to where it is let go.
  - with a fill or outline selector.
  - Allows user to toggle between an outline or solid colour.
- Stamp Tool
  - Prints a preset design at the point of mouse click.
- Eraser
  - This feature will erase wherever the user drags. It has increased width compared to other tools.
- Load Button
  - Creates a button on the top of the screen which opens file explorer. The user can then load an image of their choosing to the canvas.
  - This button is created in the html and the function is contained in the helper functions file.
- Star Trail
  - Creates a star trail wherever the user drags, of varying sizes.
- Scissors Tool
  - Allows user to select an area of the canvas to be cleared.
- Blur Tool
  - This tool blurs an area in a set radius in an ellipse shape.
  - It takes the colours surrounding the mouse and blurs them into an average colour.
  - This can be dragged to blur large areas.
- Spirograph Tool
  - Repeats what is drawn at regular intervals around the middle of the canvas.
- Flood Fill
  - All pixels that are connected to the clicked pixel by an unbroken sequence of pixels of the same colour are changed to the desired colour.
- Background and Foreground Colours
  - Allows the user to independently select the colour of the canvas and the colour of the tool being used.

## Future features to include

- Some Filters
  - Implement various filters that will enhance the look of an image.
  - This could include a filter that changes colour based on contrast, or a black and white filter.
- Colour Picker
  - Allows the user to select a pixel on the canvas and set the colour of that pixel as the selected colour.
- Text Tool
  - This will be a tool to add text wherever the user clicks.
  - The user could be able to change size and font depending on capabilities or JavaScript.
- Rotate / Flip / Crop
  - This will be a tool to rotate or flip the canvas along several axis, and crop the image.
  - This feature might break certain aspects of our code however, as the canvas is a fixed size in the html, so rotating will mean it will overlap other features.
  - One way to fix this if we decide to implement this tool will be making sure whenever the canvas size or rotation is changed, the html deals with the padding at the same time.

## Schedule

### Week 1

Goals:

- Rectangle tool
- Ellipse tool

Complete:

- Rectangle tool
- Ellipse tool

### Week 2

Goals:

- Fill/Outline
- Stamp
- Eraser
- Load button

Complete:

- Fill/Outline
- Stamp
- Eraser
- Load button

### Week 3

Goals:

- Spirograph
- Scissors
- Star trail
- Blur tool

Complete:

- Spirograph
- Scissors
- Star trail
- Blur tool

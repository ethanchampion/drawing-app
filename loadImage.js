// Function to handle file submissions
function fileSubmission() {
  var preview = $('#file-input');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    preview.style.width = '100px';
  }, false);

  if (file) {
      reader.readAsDataURL(file);
  }
}
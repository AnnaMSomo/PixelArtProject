// Select color input
const colorChoice = document.getElementById('colorPicker');

// select table - pixelCanvas
const tblCanvas = document.getElementById('pixelCanvas');

// Select size input
const size = document.getElementById('sizePicker');

// Set an event listener on the submit button and call function makeGrid
// Call function clearGrid call then call function makeGrid
// Set height and width values from the user input values set is sizepicker
size.addEventListener('submit', function(event){
  event.preventDefault();
  const widthValue = document.getElementById('inputWidth');
  const heightValue = document.getElementById('inputHeight');
  const width = widthValue.value;
  const height = heightValue.value;
  clearGrid();
  makeGrid(height, width);
});

// Clear the table rows
// https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
function clearGrid() {
  while (tblCanvas.rows.length > 0 ){
    tblCanvas.deleteRow(0);
   }
 }

// Function makeGrid()
function makeGrid(height, width) {
  // Create a table row
  for (let h = 0; h < height; h++) {
    let row = tblCanvas.insertRow(h);
    // Add cell to end of row
    for (let w = 0; w < width; w++) {
      let cell = row.insertCell(w);
      // Add event listener to the cell. Add color selected to the  cell
      cell.addEventListener('click', function(event) {
        cell.style.backgroundColor = colorChoice.value;
      });
    }
  }
}

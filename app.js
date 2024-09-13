const startGridsize = 16; //Initial Grid Size
const gridContainer = document.getElementById("gridContainer");
const gridButton = document.getElementById("gridButton");

//Creating the Grid
function createGrid(gridSize) {
  // Cleaning the existing Grid
  gridContainer.innerHTML = "";

  const squareSize = 640 / gridSize; //Setting the size of Grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    //Adding hover effect
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "#3498db";
    });
    // Resetting color when mouse leaves
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "#f0f0f0";
    });
    gridContainer.appendChild(div);
  }
}

// Prompt for a new grid size and recreate the grid
gridButton.addEventListener("click", () => {
  let usergivenSize = parseInt(prompt("Enter size number to make a new Grid:"));
  if (usergivenSize >= 1 && usergivenSize <= 100) {
    createGrid(usergivenSize);
  } else {
    alert("Enter a valid number between 1-100");
  }
});

//First Grid
createGrid(startGridsize);

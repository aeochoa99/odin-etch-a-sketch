const gridContainer = document.querySelector(".grid");
const clearButton = document.querySelector("#clear");
const createGridButton = document.querySelector("#create");

function createGrid(gridSize) {
    gridContainer.replaceChildren();
    
    const numOfCells = gridSize * gridSize;

    for (let i = 0; i < numOfCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `calc(100% / ${gridSize})`;
        gridCell.style.height = `calc(100% / ${gridSize})`;
        gridContainer.appendChild(gridCell);
    }

    const cells = document.querySelectorAll(".grid > div");

    cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#3C3C3C";
    })
})
}

function clearGrid() {
    const cells = document.querySelectorAll(".grid > div");
    cells.forEach(cell => {
        cell.style.backgroundColor = "#D9D9D9";
    })
}

clearButton.addEventListener("click", clearGrid);
createGridButton.addEventListener("click", () => {
    const getGridSize = Number(prompt("Enter a number for your grid size. (Max of 100)"));

    if (isNaN(getGridSize)) {
        alert("Please enter a valid number.");
    } else {
        createGrid(getGridSize);
    }
})

createGrid(16);
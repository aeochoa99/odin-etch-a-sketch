const gridContainer = document.querySelector(".grid");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = "calc(100% / 16)";
        gridCell.style.height = "calc(100% / 16)";
        gridContainer.appendChild(gridCell);
    }
}

createGrid();

const cells = document.querySelectorAll(".grid > div");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#3C3C3C";
    })
})
let clearBtn = document.getElementById('clear');
let gridPick = document.getElementById('grid-pick');
let gridContainer = document.getElementById('container');
let defaultGrid = 16;

gridContainer.style.gridTemplateColumns = `repeat(${defaultGrid}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${defaultGrid}, 1fr)`;

gridPick.setAttribute('value', `${defaultGrid}`);
gridPick.setAttribute('max', '100');
gridPick.setAttribute('min', '2');

window.onload = function(){
    createGrid(defaultGrid);
}

// create grid
function createGrid(gridSize){
    clearGrid();
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for(let i = 0; i < gridSize * gridSize; i++){
        let grid = document.createElement('div');
        grid.id = 'grid';
        gridContainer.appendChild(grid);
    }
}

// clear grid
function clearGrid(){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// click event on button
clearBtn.addEventListener('click', () => {
    let gridSize = gridPick.value;
    createGrid(parseInt(gridSize));
});

gridPick.addEventListener('change', (event) => {
    let gridSize = gridPick.value;
    if(gridSize === null || gridSize === undefined
        || gridSize === "" || parseInt(gridSize) === NaN){
        alert('Grid size must be a number');
        gridPick.value = defaultGrid;
        createGrid(defaultGrid);
        return;
    } else {
        if(parseInt(gridSize) > 100 || parseInt(gridSize) < 2){
            alert('2 <= Grid size <= 100');
            gridPick.value = defaultGrid;
            createGrid(defaultGrid);
            return;
        }
    }

    createGrid(parseInt(gridSize));
})
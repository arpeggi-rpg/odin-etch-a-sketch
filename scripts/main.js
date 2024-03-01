const gridContainer = document.querySelector('#gridContainer');

const generateGrid = function (gridSize) {
    if (gridSize < 1 || gridSize >= 101) {
        alert('Invalid size! Grids must be between 1 and 100 in size');
        return;
    }
    for (let i = 0; i <= gridSize; i++) {
        let column = document.createElement('div');
        column.class = 'column';
        for (let j = 0; j <= gridSize; j++) {
            let square = document.createElement('div');
            square.class = 'square';
            square.style.backgroundColor = 'red';
            square.style.width = '16px';
            square.style.height = '16px';
            column.appendChild(square);
        }
        gridContainer.appendChild(column);
    }
}

generateGrid(16);
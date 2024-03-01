const gridContainer = document.querySelector('#gridContainer');

const getContainerHeight = function (gridSize) {
    return (gridContainer.offsetHeight / gridSize).toString();
}

const generateGrid = function (gridSize) {
    if (gridSize < 1 || gridSize >= 101) {
        alert('Invalid size! Grids must be between 1 and 100 in size');
        return;
    }
    containerHeight = getContainerHeight(gridSize);
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement('div');
        square.class = 'square';
        square.style.backgroundColor = 'red';
        square.style.width = containerHeight + 'px';
        square.style.height = square.style.width;
        gridContainer.appendChild(square);
    }
}

generateGrid(16);
const gridContainer = document.querySelector('#gridContainer');

const getSquareHeight = function (gridSize) {
    return (gridContainer.offsetHeight / gridSize).toString();
}

const genBaseColor = function () {
    let baseColor = [];
    for (let i = 0; i < 3; i++) {baseColor.push(Math.floor(Math.random() * 255));}
    return baseColor;
}

const getCSSColor = function (rgbValues) {
    return 'rgb(' + rgbValues.at(0) + ',' + rgbValues.at(1) + ',' + rgbValues.at(2) + ')'; 
}

const generateBaseGrid = function (gridSize) {
    if (gridSize < 1 || gridSize >= 101) {
        alert('Invalid size! Grids must be between 1 and 100 in size');
        return;
    }
    squareHeight = getSquareHeight(gridSize);
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement('div');
        square.class = 'square';
        square.style.width = squareHeight + 'px';
        square.style.height = square.style.width;
        square.addEventListener('click',  () => {if (!square.style.backgroundColor) square.style.backgroundColor = getCSSColor(genBaseColor())});
        // square.addEventListener('click', () => square.style.backgroundColor == 'rgb(0,0,0)' || darkenSquare(square, color));
        gridContainer.appendChild(square);
    }
}

generateBaseGrid(16);
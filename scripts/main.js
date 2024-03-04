const gridContainer = document.querySelector('#gridContainer');

const getContainerHeight = function (gridSize) {
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

const getRGBValues = function (color) {
    let colorMatch = color.match(/[0-9]+/g);
    let colorArr = colorMatch.map(function (x) {x = +x; return x});
    return colorArr;
}

const darkenSquare = function (square) {
    let currentColor = getComputedStyle(square).backgroundColor;
    currentColor = getRGBValues(currentColor);
    console.log(currentColor);
    for (let i = 0; i < 3; i++) {
        currentColor = currentColor.with(i, Math.floor(currentColor.at(i) - (baseColor.at(i) * 0.1)));
    }
    if (currentColor.at(0) < (baseColor.at(0) * 0.1)) {
        square.style.backgroundColor = 'rgb(0,0,0)';
        return;
    }
    square.style.backgroundColor = getCSSColor(currentColor);
    return;
}

const generateGrid = function (gridSize, color) {
    if (gridSize < 1 || gridSize >= 101) {
        alert('Invalid size! Grids must be between 1 and 100 in size');
        return;
    }
    containerHeight = getContainerHeight(gridSize);
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement('div');
        square.class = 'square';
        square.style.backgroundColor = color;
        square.style.width = containerHeight + 'px';
        square.style.height = square.style.width;
        square.addEventListener('mouseenter', () => square.style.backgroundColor == 'rgb(0,0,0)' || darkenSquare(square, color));
        gridContainer.appendChild(square);
    }
}

let baseColor = genBaseColor();
let baseCSSCol = getCSSColor(baseColor);
generateGrid(16, baseCSSCol);
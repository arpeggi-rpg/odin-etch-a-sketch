const resizeSlider = document.querySelector('#resizeSlider');
resizeSlider.addEventListener('change', (event) => regenGrid(event.target.value));
const currentSize = document.querySelector('#currentSize');
const gridContainer = document.querySelector('#gridContainer');
let gridClickState = false;
gridContainer.addEventListener('mousedown', (event) => {gridClickState = true; event.preventDefault()});
gridContainer.addEventListener('mouseup', (event) => {gridClickState = false; event.preventDefault()});


const getSquareHeight = function (gridSize) {
    return (gridContainer.offsetHeight / gridSize).toString();
}

const genBaseColor = function () {
    let baseColor = [];
    for (let i = 0; i < 3; i++) {
        baseColor.push(Math.floor(Math.random() * 255));
    }

    return baseColor;
}

const getCSSColor = function (rgbaValues) {
    // take an array of rgb or rgba values and return the equivalent css value
    if (rgbaValues.length < 4) {
        return 'rgb(' + rgbaValues.at(0) + ',' + rgbaValues.at(1) + ',' + rgbaValues.at(2) + ')';
    }

    return 'rgba(' + rgbaValues.at(0) + ',' + rgbaValues.at(1) + ',' + rgbaValues.at(2) + ',' + rgbaValues.at(3) + ')'; 
}

const getRGBAColor = function (cssValue) {
    rgbaColor = cssValue.match(/(0.)?[0-9]+/g);
    rgbaColor = rgbaColor.map((x) => x = +x);

    return rgbaColor;
}

const darkenColor = function (color) {
    color = getRGBAColor(color);
    // allows color to be compared to an array representing pure black
    if (JSON.stringify(color) === JSON.stringify([0, 0, 0])) {return;}

    let a = color.at(3)
    a += 0.11;
    if (a >= 0.99) {
        a = 1;
    }
    color = color.with(3, a);

    return getCSSColor(color);
}

const generateGrid = function (gridSize) {
    squareHeight = getSquareHeight(gridSize);
    for (let i = 0; i < gridSize ** 2; i++) {
        let shadingSquare = document.createElement('div');
        shadingSquare.class = 'square';
        shadingSquare.style.width = squareHeight + 'px';
        shadingSquare.style.height = shadingSquare.style.width;
        shadingSquare.style.backgroundColor = 'rgba(0, 0, 0, 0)';

        let square = document.createElement('div');
        square.class = 'square';
        square.style.width = squareHeight + 'px';
        square.style.height = square.style.width;
        square.addEventListener('mouseenter',  () => {
            if (!gridClickState) {return}
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = getCSSColor(genBaseColor());
            }
            else {
                shadingSquare.style.backgroundColor = darkenColor(shadingSquare.style.backgroundColor);
            }
        });

        square.appendChild(shadingSquare)
        gridContainer.appendChild(square);
    }
}

const regenGrid = function (gridSize) {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    generateGrid(gridSize);
    currentSize.textContent = gridSize;
}

generateGrid(16);
currentSize.textContent = '16';

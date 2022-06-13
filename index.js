const input = document.querySelector("input");
const log = document.getElementById("log");
const carretElem = document.getElementById("carret");

input.onkeydown = handleKeyDown;

const textBuffers = [[]];
const carretPos = { col: 0, row: 0 };
function setCarretPosDiff(colDiff = 0, rowDiff = 0) {
    carretPos.row += rowDiff;
    carretPos.col += colDiff;
    if (carretPos.row > textBuffers.length - 1) {
        carretPos.row = textBuffers.length - 1;
    }
    if (carretPos.col > textBuffers[carretPos.row].length - 1) {
        carretPos.col = textBuffers[carretPos.row].length - 1
    }
    if (carretPos.row < 0) carretPos.row = 0;
    if (carretPos.col < 0) carretPos.col = 0;
}

function handleKeyDown(e) {
    const isChar = e.key.length === 1;
    const keyName = e.key;
    if (isChar) {
        carretPos.col += 1;
        textBuffers[carretPos.row].splice(carretPos.col, 0, keyName);
    } else {
        switch (keyName) {
            case "ArrowLeft":
                setCarretPosDiff(-1, 0);
                break;
            case "ArrowRight":
                setCarretPosDiff(1, 0);
                break;
            case "ArrowUp":
                setCarretPosDiff(0, -1);
                break;
            case "ArrowDown":
                setCarretPosDiff(0, 1);
                break;
            case "Enter":
                carretPos.row += 1;
                textBuffers.splice(carretPos.row, 0, []);
                setCarretPosDiff(0, 0);
                break;
            default:
                break;
        }
    }
    render();
}

function render() {
    console.log(textBuffers, carretPos);
    // map: Array<Array<Char>> => Array<String> 
    // Array<String> => String
    // [1,2,3,4].join("|") -> "1|2|3|4"
    log.innerHTML = textBuffers.map(line => line.join("")).join("<br/>");
    carretElem.style.left = `${carretPos.col * 10}px`;
    carretElem.style.top = `${carretPos.row * 1.2}rem`;
}
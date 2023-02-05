// target all page elements
const dirt = document.querySelector("#dirt"); //inventory
const grass = document.querySelector("#grass"); //inventory
const Stone = document.querySelector("#Stone"); //inventory
const wood = document.querySelector("#wood"); //inventory
const leaves = document.querySelector("#leaves"); //inventory

const axe = document.querySelector("#axe"); //axe
const pickAxe = document.querySelector("#pickAxe"); //pickAxe
const shovel = document.querySelector("#shovel"); //shovel

const startAgain = document.querySelector(".btn-start"); //btn-start



let dirtCollection = 0;
let grassCollection = 0;
let StoneCollection = 0;
let leavesCollection = 0;
let trunckTreeCollection = 0;

function setDiv(e) {
    let classList = e.target.classList;
    if (classList.contains("leaves") && currenTool === "Axe") {
        classList.remove("leaves");
        leavesCollection++;
        leaves.textContent = leavesCollection;
    }
    if (classList.contains("wood") && currenTool === "Axe") {
        classList.remove("wood");
        trunckTreeCollection++;
        wood.textContent = trunckTreeCollection;
    }
    if (classList.contains("Stone") && currenTool === "Pickaxe") {
        classList.remove("Stone");
        StoneCollection++;
        Stone.textContent = StoneCollection;
    }
    if (classList.contains("grass") && currenTool === "Shovel") {
        classList.remove("grass");
        grassCollection++;
        grass.textContent = grassCollection;
    }
    if (classList.contains("dirt") && currenTool === "Shovel") {
        classList.remove("dirt");
        dirtCollection++;
        dirt.textContent = dirtCollection;
    }

    if (
        classList.length === 0 &&
        currenTool === "dirtTrash" &&
        dirtCollection > 0
    ) {
        classList.add("dirt");
        dirtCollection--;
        dirt.textContent = dirtCollection;
    }

    if (
        classList.length === 0 &&
        currenTool === "grassTrash" &&
        grassCollection > 0
    ) {
        classList.add("grass");
        grassCollection--;
        grass.textContent = grassCollection;
    }

    if (
        classList.length === 0 &&
        currenTool === "StoneTrash" &&
        StoneCollection > 0
    ) {
        classList.add("Stone");
        StoneCollection--;
        Stone.textContent = StoneCollection;
    }

    if (
        classList.length === 0 &&
        currenTool === "woodTrash" &&
        trunckTreeCollection > 0
    ) {
        classList.add("wood");
        trunckTreeCollection--;
        wood.textContent = trunckTreeCollection;
    }


    if (
        classList.length === 0 &&
        currenTool === "leavesTrash" &&
        leavesCollection > 0
    ) {
        classList.add("leaves");
        leavesCollection--;
        leaves.textContent = leavesCollection;
    }
}

/// creating grid items dynamically
const mainGame = document.querySelector(".main-game");

///function to fill all empty dives

function fillEmptyDivs(rowStart, rowEnd, columnStart, columnEnd) {
    let emptyDive;
    for (let row = rowStart; row <= rowEnd; row++) {
        for (let column = columnStart; column <= columnEnd; ++column) {
            const newDivs = document.createElement("div");
            newDivs.style.gridRowStart = row;
            newDivs.style.gridColumnStart = column;
            mainGame.appendChild(newDivs);
            emptyDive = newDivs;
            newDivs.addEventListener("click", function(e) {
                setDiv(e);
            });
        }
    }
}
startAgain.addEventListener("click", reset);

fillEmptyDivs(1, 22, 1, 22);

// function to create map world
function createMap(type, rowStart, rowEnd, columnStart, columnEnd) {
    for (let row = rowStart; row <= rowEnd; row++) {
        for (let column = columnStart; column <= columnEnd; ++column) {
            const materialElement = document.createElement("div");
            materialElement.style.gridRowStart = row;
            materialElement.style.gridColumnStart = column;
            materialElement.classList.add(`${type}`);
            mainGame.appendChild(materialElement);
            materialElement.addEventListener("click", function(e) {
                setDiv(e);
            });
        }
    }
}


createMap("dirt", 16, 21, 1, 21);
createMap("grass", 15, 15, 1, 21);
createMap("Stone", 11, 14, 1, 1);
createMap("Stone", 12, 14, 2, 2);
createMap("Stone", 13, 14, 3, 3);
createMap("Stone", 14, 14, 4, 4);
createMap("wood", 12, 14, 6, 6);
createMap("wood", 12, 14, 15, 15);
createMap("leaves", 8, 11, 5, 7);
createMap("leaves", 8, 11, 14, 16);

//events for trash box and tools:

let currenTool = "";

axe.addEventListener("click", function() {
    currenTool = "Axe";
    document.querySelector(".flex-box").style = `cursor: url("/assets/cursor/axes.png"), auto`;

});

pickAxe.addEventListener("click", function() {
    currenTool = "Pickaxe";
    document.querySelector(".flex-box").style = `cursor: url("/assets/cursor/pickaxe.png"), auto`;

});

shovel.addEventListener("click", function() {
    currenTool = "Shovel";
    document.querySelector(".flex-box").style = `cursor: url("/assets/cursor/shovel.png"), auto`;

});

dirt.addEventListener("click", function() {
    currenTool = "dirtTrash";
});

grass.addEventListener("click", function() {
    currenTool = "grassTrash";
});

Stone.addEventListener("click", function() {
    currenTool = "StoneTrash";
});

wood.addEventListener("click", function() {
    currenTool = "woodTrash";
});

leaves.addEventListener("click", function() {
    currenTool = "leavesTrash";
});



function reset() {
    currenTool = '';
    dirtCollection = 0;
    grassCollection = 0;
    StoneCollection = 0;
    leavesCollection = 0;
    trunckTreeCollection = 0;
    leaves.textContent = leavesCollection;
    wood.textContent = trunckTreeCollection;
    Stone.textContent = StoneCollection;
    grass.textContent = grassCollection;
    dirt.textContent = dirtCollection;
    mainGame.innerHTML = "";

    document.querySelector(".flex-box").style = `cursor: pointer, auto`;


    fillEmptyDivs(1, 22, 1, 22);

    createMap("dirt", 16, 21, 1, 21);
    createMap("grass", 15, 15, 1, 21);
    createMap("Stone", 11, 14, 1, 1);
    createMap("Stone", 12, 14, 2, 2);
    createMap("Stone", 13, 14, 3, 3);
    createMap("Stone", 14, 14, 4, 4);
    createMap("wood", 12, 14, 6, 6);
    createMap("wood", 12, 14, 15, 15);
    createMap("leaves", 8, 11, 5, 7);
    createMap("leaves", 8, 11, 14, 16);



}

startAgain.addEventListener("click", restart);

function restart() {

}